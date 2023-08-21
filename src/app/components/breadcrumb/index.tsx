import { Breadcrumb } from "antd";

type BreadcrumbsProps = {
  pages: { href: string; title: string }[];
  excludeDefault?: boolean;
};

const Breadcrumbs = ({ pages, excludeDefault }: BreadcrumbsProps) => {
  const defaultHomePage = [
    {
      title: (
        <>
          <span className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center mr-4 text-lg">
              <i className="fa-solid fa-house"></i>
            </span>
            <span>Home</span>
          </span>
        </>
      ),
      href: "",
    },
  ];
  const Separator = () => (
    <span className="w-5 h-5 flex items-center justify-center">
      <i className="fa-solid fa-chevron-right"></i>
    </span>
  );
  return (
    <>
      <div className="mb-6">
        <Breadcrumb
          className="py-3 inline-flex"
          separator={<Separator />}
          items={excludeDefault ? [...pages] : [...defaultHomePage, ...pages]}
        />
      </div>

      {/* <Breadcrumb
        className="border border-gray-200 py-3 px-5 inline-flex"
        separator={[
          <span className="w-5 h-5 flex items-center justify-center">
            <i className="fa-solid fa-chevron-right"></i>
          </span>,
        ]}
        items={[...defaultHomePage, ...pages]}
      /> */}
    </>
  );
};

export default Breadcrumbs;
