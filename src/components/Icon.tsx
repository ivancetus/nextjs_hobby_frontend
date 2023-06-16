import * as React from "react";
export const LoadingIcon = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...rest}
    className={`${className}`}
  >
    <style>{"@keyframes spinner_AtaB{to{transform:rotate(360deg)}}"}</style>
    <path
      d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
      opacity={0.25}
    />
    <path
      d="M10.14 1.16a11 11 0 0 0-9 8.92A1.59 1.59 0 0 0 2.46 12a1.52 1.52 0 0 0 1.65-1.3 8 8 0 0 1 6.66-6.61A1.42 1.42 0 0 0 12 2.69a1.57 1.57 0 0 0-1.86-1.53Z"
      style={{
        transformOrigin: "center",
        animation: "spinner_AtaB .75s infinite linear",
      }}
    />
  </svg>
);

export const DownloadIcon = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...rest}
    className={`${className}`}
  >
    <title />
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M3 12.3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="m7.9 12.3 4.1 4 4.1-4" data-name="Right" />
      <path d="M12 2.7v11.5" />
    </g>
  </svg>
);

export const SendIcon = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...rest}
    className={`${className}`}
  >
    <path
      fill="currentColor"
      d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 3 3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 0 0-.34-1.47ZM4.85 9.58l12.77-4.26-7.09 7.09-5.68-2.83Zm9.58 9.57-2.84-5.68 7.09-7.09-4.25 12.77Z"
    />
  </svg>
);

export const LoadingIcon2 = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...rest}
    className={`${className}`}
  >
    <style>
      {
        "@keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(.33,0,.66,.33);transform:translateY(-6px)}to{transform:translate(0)}}.spinner_qM83{animation:spinner_8HQG 1.05s infinite}"
      }
    </style>
    <circle fill="currentColor" cx={4} cy={12} r={3} className="spinner_qM83" />
    <circle
      fill="currentColor"
      cx={12}
      cy={12}
      r={3}
      className="spinner_qM83"
      style={{
        animationDelay: ".1s",
      }}
    />
    <circle
      fill="currentColor"
      cx={20}
      cy={12}
      r={3}
      className="spinner_qM83"
      style={{
        animationDelay: ".2s",
      }}
    />
  </svg>
);
