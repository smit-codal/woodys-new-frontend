export default function renderHeaderFooterAndMeta(pathname: string) {
  let defaultConfig = {
    header: true,
    footer: true,
    meta: {
      title: "",
    },
  };
  switch (pathname) {
    case "/":
      defaultConfig = {
        ...defaultConfig,
        meta: {
          title: "Home",
        },
      };
      break;
    case "/typography":
      defaultConfig = {
        header: false,
        footer: false,
        meta: {
          title: "TypoGraphy",
        },
      };
      break;

    case "/checkout":
      defaultConfig = {
        ...defaultConfig,
        meta: {
          title: "Checkout",
        },
      };
      break;

    case "/cart":
      defaultConfig = {
        ...defaultConfig,
        meta: {
          title: "Cart",
        },
      };
      break;

    case "/empty-cart":
      defaultConfig = {
        ...defaultConfig,
        meta: {
          title: "Cart",
        },
      };
      break;

    case "/reset-password":
      defaultConfig = {
        header: true,
        footer: false,
        meta: {
          title: "Reset Password",
        },
      };
      break;

    case "/account":
      defaultConfig = {
        ...defaultConfig,
        meta: {
          title: "Account",
        },
      };
      break;

    default:
      return defaultConfig;
  }
  return defaultConfig;
}
