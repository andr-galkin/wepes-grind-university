'use client'

import React from 'react'
import BodyText from '@/app/components/Text/BodyText'

const SizesTable: React.FC = ({}) => {
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
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                </tr>
                <tr className="text-center">
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                </tr>
                <tr className="text-center">
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                </tr>
                <tr className="text-center">
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                    <td className="border border-gray-400 px-6 py-3"></td>
                </tr>
            </tbody>
        </table>
    )
}

export default SizesTable
