import * as React from "react";
import InputBox from "./inputs";
import Link from "next/link";

const InputDesignPage = () => (
  <>
    <section>
      <div className="md:grid grid-cols-3 gap-6">
        <div>
          <div className="mb-2 text-xl">Small Input</div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="sm"
              label="Small default"
              value=""
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              required
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="sm"
              label="Small active"
              value="Input text"
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="sm"
              label="Small disabled"
              value="Input text"
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
              disable
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="sm"
              label="Small success"
              value="Input text"
              placeholder="Input text"
              icon_prefix=""
              icon_suffix="fa-solid fa-xmark"
              success={true}
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="sm"
              label="Small error"
              value="Input text"
              placeholder="Input text"
              icon_prefix=""
              icon_suffix="fa-solid fa-xmark"
              error={true}
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
        </div>
        <div>
          <div className="mb-1 text-xl">Default Input</div>

          <div className="mb-4">
            <InputBox
              type="text"
              label="Default"
              value=""
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              label="Active"
              value="Input text"
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              label="Disabled"
              value="Input text"
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
              disable
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              label="Success"
              value="Input text"
              placeholder="Input text"
              icon_prefix=""
              icon_suffix="fa-solid fa-xmark"
              success={true}
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              label="Error"
              value="Input text"
              placeholder="Input text"
              icon_prefix=""
              icon_suffix="fa-solid fa-xmark"
              error={true}
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl">Large Input</div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="lg"
              label="Large default"
              value=""
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="lg"
              label="Large active"
              value="Input text"
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="lg"
              label="Large disabled"
              value="Input text"
              placeholder="Input text"
              icon_prefix="fa-solid fa-user"
              icon_suffix="fa-solid fa-xmark"
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
              disable
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="lg"
              label="Large Success"
              value="Input text"
              placeholder="Input text"
              icon_prefix=""
              icon_suffix="fa-solid fa-xmark"
              success={true}
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              size="lg"
              label="Large Error"
              value="Input text"
              placeholder="Input text"
              icon_prefix=""
              icon_suffix="fa-solid fa-xmark"
              error={true}
              infoTextShow={true}
              infoText={
                <>
                  We’ll never share your details. See our
                  <Link href="">
                    <a className="ml-1">Privacy Policy</a>
                  </Link>
                  .
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default InputDesignPage;
