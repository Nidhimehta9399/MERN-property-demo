import { SVGProps as ReactSVGProps } from "react";

declare global {
  interface SVGProps extends ReactSVGProps<SVGSVGElement> {
    size?: number;
  }
}
