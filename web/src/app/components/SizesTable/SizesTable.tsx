"use client";

import React from "react";
import BodyText from "@/app/components/Text/BodyText";

interface SizesTableProps {}

const SizesTable: React.FC<SizesTableProps> = ({}) => {
  return (
    <table className="table-auto border-collapse border border-gray-400 bg-white shadow-lg">
      <thead>
        <tr className="">
          <th className="border border-gray-400 px-6 py-3">
            <BodyText color="text-black" size="small">
              S
            </BodyText>
          </th>
          <th className="border border-gray-400 px-6 py-3">
            <BodyText color="text-black" size="small">
              M
            </BodyText>
          </th>
          <th className="border border-gray-400 px-6 py-3">
            <BodyText color="text-black" size="small">
              L
            </BodyText>
          </th>
          <th className="border border-gray-400 px-6 py-3">
            <BodyText color="text-black" size="small">
              XL
            </BodyText>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="border border-gray-400 px-6 py-3">Row 1 Col 1</td>
          <td className="border border-gray-400 px-6 py-3">Row 1 Col 2</td>
          <td className="border border-gray-400 px-6 py-3">Row 1 Col 3</td>
          <td className="border border-gray-400 px-6 py-3">Row 1 Col 4</td>
        </tr>
        <tr className="text-center">
          <td className="border border-gray-400 px-6 py-3">Row 2 Col 1</td>
          <td className="border border-gray-400 px-6 py-3">Row 2 Col 2</td>
          <td className="border border-gray-400 px-6 py-3">Row 2 Col 3</td>
          <td className="border border-gray-400 px-6 py-3">Row 2 Col 4</td>
        </tr>
        <tr className="text-center">
          <td className="border border-gray-400 px-6 py-3">Row 3 Col 1</td>
          <td className="border border-gray-400 px-6 py-3">Row 3 Col 2</td>
          <td className="border border-gray-400 px-6 py-3">Row 3 Col 3</td>
          <td className="border border-gray-400 px-6 py-3">Row 3 Col 4</td>
        </tr>
        <tr className="text-center">
          <td className="border border-gray-400 px-6 py-3">Row 4 Col 1</td>
          <td className="border border-gray-400 px-6 py-3">Row 4 Col 2</td>
          <td className="border border-gray-400 px-6 py-3">Row 4 Col 3</td>
          <td className="border border-gray-400 px-6 py-3">Row 4 Col 4</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SizesTable;
