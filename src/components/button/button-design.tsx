import Button from "./index";
import * as React from "react";
import { Tooltip } from "antd";

const ButtonSection = (
  <>
    <section className="button-section">
      <h5 className="text-lg mb-1">Button Designs</h5>
      {/* <h2 className="style-heading pt-4">Buttons</h2> */}
      <div className="py-4">
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
            </div>
          </div>
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
              <Button
                className="btn btn-sm btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
              <Button
                className="btn btn-md btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
              <Button
                className="btn btn-lg btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
              <Button
                className="btn btn-xl btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
              <Button
                className="btn btn-sm-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
              <Button
                className="btn btn-md-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
              <Button
                className="btn btn-lg-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
              <Button
                className="btn btn-xl-rounded btn-accent"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-secondary"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4 ">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-gray"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />

              <Button
                className="btn btn-lg btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>

            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-white"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-green"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-red"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-blue"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-blue btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-secondary btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-orange btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-white btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4 ">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-green btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-rose"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-rose"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-rose"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-rose"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-rose"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-rose btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-rose btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-rose btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-rose btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-rose btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-yellow"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-yellow"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-yellow"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-yellow"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-yellow"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-yellow btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-yellow btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-yellow btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-yellow btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-yellow btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-stone"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-stone"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-stone"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-stone"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-stone"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-stone btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-stone btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-stone btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-stone btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-stone btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
        <div className="p-4 ">
          <div className="md:flex justify-between mb-2 gap-4">
            <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
              <Button
                className="btn btn-xs btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-sm btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-md btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-lg btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
              />
              <Button
                className="btn btn-xl btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix="fa-regular fa-fire-flame"
                label="Button text"
                disable
              />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="btn btn-xs-rounded btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-sm-rounded btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-md-rounded btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-lg-rounded btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
              />
              <Button
                className="btn btn-xl-rounded btn-accent btn-outline"
                icon_prefix="fa-regular fa-fire-flame"
                icon_suffix=""
                label=""
                disable
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="lg:grid grid-cols-3 gap-4">
          <div className="col-span-2 mb-4 lg:mb-0">
            <h2 className="style-heading">Social Buttons</h2>
            <div className="p-4">
              <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
                <Button
                  className="btn btn-social btn-xs btn-social-dark rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social  btn-sm btn-social-dark rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-md btn-social-dark rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-lg btn-social-dark rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
                <Button
                  className="btn btn-social btn-xs btn-social-light rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-sm btn-social-light rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-md btn-social-light rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-lg btn-social-light rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
                <Button
                  className="btn btn-social btn-xs btn-gray-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-sm btn-gray-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-md btn-gray-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-lg btn-gray-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
              </div>
            </div>
            <div className="p-4 bg-gray-900">
              <div className="flex items-center gap-3 flex-wrap mb-3 lg:mb-0">
                <Button
                  className="btn btn-social btn-xs btn-white btn-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-sm btn-white btn-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-md btn-white btn-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
                <Button
                  className="btn btn-social btn-lg btn-white btn-outline rounded-none"
                  icon_prefix="fa-brands fa-facebook-f"
                  icon_suffix=""
                  label="Sign in with Facebook"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="style-heading">Group Buttons</h2>
            <div className="bg-slate-50 border border-gray-300 rounded-lg p-5 mt-4">
              <div className="p-4 flex items-center">
                <Button
                  className="btn btn-sm btn-gray-outline border rounded-none px-4 py-[0.4375rem]"
                  icon_prefix=""
                  icon_suffix=""
                  label="Years"
                />
                <Button
                  className="btn btn-sm btn-gray-outline border border-l-0 border-r-0 rounded-none px-4 py-[0.4375rem]"
                  icon_prefix=""
                  icon_suffix=""
                  label="Months"
                />
                <Button
                  className="btn btn-sm btn-gray-outline border rounded-none px-4 py-[0.4375rem]"
                  icon_prefix=""
                  icon_suffix=""
                  label="Days"
                />
              </div>
              <div className="p-4 flex items-center">
                <Button
                  className="btn btn-md-rounded text-base border btn-gray-outline rounded-none "
                  icon_prefix="fa-solid fa-chevron-left"
                  icon_suffix=""
                  label=""
                />
                <Button
                  className="btn btn-md-rounded text-base border btn-gray-outline border-l-0 rounded-none "
                  icon_prefix="fa-solid fa-chevron-right"
                  icon_suffix=""
                  label=""
                />
              </div>
              <div className="p-4 flex items-center">
                <button className="btn btn-sm btn-gray-outline border rounded-none pr-0">
                  <span className="btn-icon">
                    <i className="fa-solid fa-arrow-down-to-bracket text-base" />
                  </span>
                  Download
                  <span className="border-l border-l-gray-200 py-2 px-4 -my-1.5 ml-2">
                    12k
                  </span>
                </button>
              </div>
              <div className="p-4 flex items-center">
                <button className="btn btn-sm btn-gray-outline border rounded-none px-4 pr-0">
                  Save changes
                  <span className="border-l border-l-gray-200 py-2 w-10 px-0 flex justify-center -my-1.5 ml-2">
                    <span className="btn-icon">
                      <i className="fa-regular fa-bookmark text-base" />
                    </span>
                  </span>
                </button>
              </div>
              <div className="p-4 flex items-center gap-1">
                <Tooltip placement="top" title="Tooltip on top">
                  <button className="btn btn-sm btn-gray-outline border rounded-none px-4 py-[0.4375rem]">
                    Years
                  </button>
                </Tooltip>
                <Tooltip placement="top" title="Tooltip on top">
                  <button className="btn btn-sm btn-gray-outline border rounded-none px-4 py-[0.4375rem]">
                    Months
                  </button>
                </Tooltip>
                <Tooltip placement="top" title="Tooltip on top">
                  <button className="btn btn-sm btn-gray-outline border rounded-none px-4 py-[0.4375rem]">
                    Days
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ButtonSection;
