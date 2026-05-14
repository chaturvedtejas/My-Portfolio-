import "./styles/brand.css";

export const BRAND_LOGO_SRC = "/brand/mct-logo.png";
export const BRAND_LOGO_ALT = "MCT monogram";

type BrandLogoProps = {
  variant?: "navbar" | "hero" | "loader";
  id?: string;
  /** When true, image is decorative (e.g. next to visible text) */
  decorative?: boolean;
};

const BrandLogo = ({
  variant = "navbar",
  id,
  decorative = false,
}: BrandLogoProps) => {
  return (
    <span
      id={id}
      className={`brand-logo brand-logo--${variant}`}
      aria-hidden={decorative ? true : undefined}
    >
      <img
        src={BRAND_LOGO_SRC}
        alt={decorative ? "" : BRAND_LOGO_ALT}
        width={320}
        height={320}
        decoding="async"
        loading="eager"
        draggable={false}
      />
    </span>
  );
};

export default BrandLogo;
