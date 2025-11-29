type SectionRefs = { [key: string]: React.RefObject<HTMLElement> };

export default function useSmoothScroll(refs: SectionRefs) {
  const scrollTo = (id: string) => {
    const section = refs[id]?.current;

    if (!section) return;

    const offset = 80;
    const y =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return scrollTo;
}
