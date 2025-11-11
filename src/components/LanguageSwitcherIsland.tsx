/** @jsxImportSource solid-js */
import { For, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";
import {
  type Language,
  persistLanguage,
  readStoredLanguage,
} from "../utils/language";

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

interface Props {
  ariaLabel: string;
  className?: string;
  options: LanguageOption[];
  initialLang: Language;
  showFlags: boolean;
  baseBtnClasses: string;
}

const isFlagImage = (value: string) => /^(?:\/?[\w\-\.]+\/.+|https?:\/\/|data:\w+\/\w+)/.test(value);

const LanguageSwitcherIsland: Component<Props> = (props: Props) => {
  const [activeLang, setActiveLang] = createSignal<Language>(props.initialLang);
  let navRef: HTMLElement | null = null;

  const dispatchLanguage = (lang: Language) => {
    document.dispatchEvent(new CustomEvent("r4gbs:langchange", { detail: { lang } }));
  };

  const applyLanguage = async (lang: Language, options: { persist?: boolean } = {}) => {
    const shouldPersist = options.persist ?? true;
    setActiveLang(lang);
    if (navRef) {
      navRef.setAttribute("data-active-lang", lang);
    }
    dispatchLanguage(lang);
    if (shouldPersist) {
      await persistLanguage(lang);
    }
  };

  onMount(async () => {
    const nextLang = await readStoredLanguage(props.initialLang);
    await applyLanguage(nextLang, { persist: nextLang !== props.initialLang });
  });

  const handleSelect = async (lang: Language) => {
    if (lang === activeLang()) return;
    await applyLanguage(lang);
  };

  return (
    <nav
      ref={(el) => {
        navRef = el;
      }}
      aria-label={props.ariaLabel}
      class={`inline-block ${props.className ?? ""}`.trim()}
      data-interactive="true"
      data-active-lang={activeLang()}
      role="radiogroup"
    >
      <ul class="flex items-center gap-2">
        <For each={props.options}>
          {(option: LanguageOption) => {
            const isCurrent = () => option.code === activeLang();
            return (
              <li>
                <button
                  type="button"
                  data-lang={option.code}
                  role="radio"
                  aria-pressed={isCurrent() ? "true" : "false"}
                  aria-checked={isCurrent() ? "true" : "false"}
                  class={`${props.baseBtnClasses} ${isCurrent() ? "is-active" : ""}`}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    void handleSelect(option.code);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === " " || event.key === "Enter") {
                      event.preventDefault();
                      void handleSelect(option.code);
                    }
                  }}
                >
                  {props.showFlags && (
                    isFlagImage(option.flag) ? (
                      <img
                        src={option.flag}
                        alt=""
                        aria-hidden="true"
                        width={16}
                        height={12}
                        class="inline-block w-4 h-3 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span aria-hidden="true">{option.flag}</span>
                    )
                  )}
                  {option.label}
                  <span class="ml-1 text-xs opacity-80 checkmark" aria-hidden="true" hidden={!isCurrent()}>
                    ✓
                  </span>
                </button>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
};

export default LanguageSwitcherIsland;
