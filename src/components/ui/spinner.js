export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="gray"
  >
    <path
      opacity="0.8"
      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
      fill="white"
    />
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 16 16"
        to="360 16 16"
        dur="1.3s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

// export default () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={38}
//     height={38}
//     viewBox="0 0 38 38"
//   >
//     <defs>
//       <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
//         <stop stopColor="#000" stopOpacity={0} offset="0%" />
//         <stop stopColor="#000" stopOpacity=".631" offset="63.146%" />
//         <stop stopColor="#000" offset="100%" />
//       </linearGradient>
//     </defs>
//     <g fill="none" fillRule="evenodd">
//       <g transform="translate(1 1)">
//         <path
//           d="M36 18c0-9.94-8.06-18-18-18"
//           id="Oval-2"
//           stroke="url(#a)"
//           strokeWidth={2}
//         >
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="0 18 18"
//             to="360 18 18"
//             dur="1.1s"
//             repeatCount="indefinite"
//           />
//         </path>
//         <circle fill="#000" cx={36} cy={18} r={1}>
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="0 18 18"
//             to="360 18 18"
//             dur="1.1s"
//             repeatCount="indefinite"
//           />
//         </circle>
//       </g>
//     </g>
//   </svg>
// )
