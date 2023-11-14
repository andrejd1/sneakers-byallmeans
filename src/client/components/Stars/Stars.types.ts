export namespace StarsTypes {
  export type StarsVariants = "small" | "large";

  export type StarsProps = {
    rating?: number;
    variant: StarsVariants;
    setRating?: (rating: number) => void;
    isReadonly?: boolean;
  };
}
