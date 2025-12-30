
import { readdir, writeFile } from "node:fs/promises";
import { join, basename } from "node:path";

const DATA_DIR = join(process.cwd(), "src/data");
const OUTPUT_FILE = join(process.cwd(), "website-content.md");

const DIVIDER = "\n\n---\n\n";

async function main() {
    const files = await readdir(DATA_DIR);
    const i18nFiles = files.filter((f) => f.endsWith(".i18n.ts"));

    let markdownOutput = "# Website Content for Translation\n\n";

    for (const file of i18nFiles) {
        const filePath = join(DATA_DIR, file);
        const pageName = basename(file, ".i18n.ts");

        console.log(`Processing ${pageName}...`);

        // Dynamic import
        const module = await import(filePath);

        // Find the exported content object
        // We assume there's one main export that is the content object
        // Or we look for an export that has 'en', 'es', 'fr', 'eu' keys
        let contentObj: any = null;
        for (const key in module) {
            const val = module[key];
            if (val && typeof val === "object" && "en" in val && "es" in val) {
                contentObj = val;
                break;
            }
        }

        if (!contentObj) {
            console.warn(`Could not find content object in ${file}`);
            continue;
        }

        markdownOutput += `# Page: ${pageName}\n\n`;

        // Order: en, es, eu, fr
        const languages = ["en", "es", "eu", "fr"];

        for (let i = 0; i < languages.length; i++) {
            const lang = languages[i];
            const content = contentObj[lang];

            markdownOutput += `## ${lang.toUpperCase()}\n\n`;

            if (content) {
                markdownOutput += formatContent(content);
            } else {
                markdownOutput += "*No content available*\n";
            }

            if (i < languages.length - 1) {
                markdownOutput += DIVIDER;
            }
        }

        markdownOutput += "\n\n================================================================\n\n";
    }

    await writeFile(OUTPUT_FILE, markdownOutput, "utf-8");
    console.log(`Generated ${OUTPUT_FILE}`);
}

function formatContent(content: any, prefix = ""): string {
    let output = "";

    if (typeof content === "string") {
        return `${prefix}: ${content}\n`;
    }

    if (Array.isArray(content)) {
        content.forEach((item, index) => {
            output += formatContent(item, `${prefix}[${index}]`);
        });
        return output;
    }

    if (typeof content === "object" && content !== null) {
        for (const key in content) {
            const val = content[key];
            const newPrefix = prefix ? `${prefix}.${key}` : key;

            if (typeof val === "string") {
                // Handle multi-line strings (markdown) nicely
                if (val.includes("\n")) {
                    output += `### ${newPrefix}\n\n${val}\n\n`;
                } else {
                    output += `**${newPrefix}**: ${val}\n\n`;
                }
            } else if (typeof val === "number" || typeof val === "boolean") {
                output += `**${newPrefix}**: ${val}\n\n`;
            } else {
                output += formatContent(val, newPrefix);
            }
        }
        return output;
    }

    return "";
}

main().catch(console.error);
