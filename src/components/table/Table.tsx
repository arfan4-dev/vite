import React, { useState } from "react";
import {
  ttCommonsRegular,
  ttCommonsMedium,
  ttCommonsThin,
} from "@/utils/fonts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "./TableHeader";
import GlobalModal from "./GlobalModal";
import { RootState } from "@/redux/store";
import {
  closeEditEmployeeModal,
  openEditEmployeeModal,
  openDeleteEmployeeModal,
  openProfileEmployeeModal,
  openDeleteLeaveModal,
  openProfileLeaveModal,
  openEditLeaveModal,
} from "@/redux/modalSlice/employees";
import EditModalContent from "@/app/[lang]/(dashboard)/(home)/employees/Modal/EditModalContent";
import DeleteModalContent from "@/app/[lang]/(dashboard)/(home)/employees/Modal/DeleteModalContent";
import ProfileModalContent from "@/app/[lang]/(dashboard)/(home)/employees/Modal/ProfileModalContent";
import { usePathname } from "next/navigation";
import DeleteLeaveModalContent from "@/app/[lang]/(dashboard)/(home)/leave-management/modal/DeleteLeaveModalContent";
import ProfileLeaveModalContent from "@/app/[lang]/(dashboard)/(home)/leave-management/modal/ProfileLeaveModalContent";
import EditLeaveModalContent from "@/app/[lang]/(dashboard)/(home)/leave-management/modal/EditLeaveModalContent";
const Table = ({ data, onEdit, onDelete, columns }: any) => {
  const profileEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isProfileEmployeeModalOpen
  );
  const editEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isEditEmployeeModalOpen
  );
  const deleteEmployeeModalIsOpen = useSelector(
    (state: RootState) => state.modal.isDeleteEmployeeModalOpen
  );
  const deleteLeaveModalIsOpen = useSelector(
    (state: RootState) => state.modal.isDeleteLeaveModalOpen
  );
  const profileLeaveModalIsOpen = useSelector(
    (state: RootState) => state.modal.isProfileLeaveModalOpen
  );
  const editLeaveModallIsOpen = useSelector(
    (state: RootState) => state.modal.isEditLeaveModalOpen
  );

  const pathname = usePathname();

  const dispatch = useDispatch();
  const openEditModal = () => {
    // Re-enable background scroll when modal is closed
    if (pathname === "/en/employees/all-employees") {
      dispatch(openEditEmployeeModal());
    } else if (pathname === "/en/leave-management/all-leave-request") {
      dispatch(openEditLeaveModal());
    }
    document.body.style.overflow = "auto";
  };

  const openDeleteModal = () => {
    document.body.style.overflow = "auto";

    if (pathname === "/en/employees/all-employees") {
      dispatch(openDeleteEmployeeModal());
    } else if (pathname === "/en/leave-management/all-leave-request") {
      dispatch(openDeleteLeaveModal());
    }
  };

  const openProfileModal = () => {
    // Re-enable background scroll when modal is closed
    if (pathname === "/en/employees/all-employees") {
      dispatch(openProfileEmployeeModal());
    } else if (pathname === "/en/leave-management/all-leave-request") {
      dispatch(openProfileLeaveModal());
    }
    document.body.style.overflow = "auto";
  };
  const closeModal = () => {
    dispatch(closeEditEmployeeModal());
    // Re-enable background scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div
        className={`relative text-[#282F5A]   overflow-x-auto shadow-md sm:rounded-lg  bg-white ml-10`}
      >
        <TableHeader data={data} />

        <table className="w-full  px-4 text-left rtl:text-right  ">
          <thead
            className={`text-[16px] text-[#ffff] ${ttCommonsThin.className}   bg-[#282F5A]`}
          >
            <tr>
              <th scope="col" className="px-4 py-2">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className={`w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                  />

                  <label className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Employee ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No.
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Joining Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`${ttCommonsRegular.className}`}>
            <tr
              className={`bg-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                SS-7892
              </th>
              <td className="px-6 py-4" onClick={openProfileModal}>
                Dallas Keuchal
              </td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4">xxx-xxx-xxx</td>
              <td className="px-6 py-4">anna.hines@mail.com</td>
              <td className="px-6 py-4">20-03-2024</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <p
                  onClick={openEditModal}
                  className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </p>
                <p
                  className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1"
                  onClick={openDeleteModal}
                >
                  <RiDeleteBin6Line size={20} />
                </p>
              </td>
            </tr>
            <tr
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                SS-7892
              </th>
              <td className="px-6 py-4">Dallas Keuchal</td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4">xxx-xxx-xxx</td>
              <td className="px-6 py-4">anna.hines@mail.com</td>
              <td className="px-6 py-4">20-03-2024</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-1"
                >
                  <RiDeleteBin6Line size={20} />
                </a>
              </td>
            </tr>
            <tr
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                SS-7892
              </th>
              <td className="px-6 py-4">Dallas Keuchal</td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4">xxx-xxx-xxx</td>
              <td className="px-6 py-4">anna.hines@mail.com</td>
              <td className="px-6 py-4">20-03-2024</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-1"
                >
                  <RiDeleteBin6Line size={20} />
                </a>
              </td>
            </tr>

            <tr
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px]`}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                SS-7892
              </th>
              <td className="px-6 py-4">Dallas Keuchal</td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4">xxx-xxx-xxx</td>
              <td className="px-6 py-4">anna.hines@mail.com</td>
              <td className="px-6 py-4">20-03-2024</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-1"
                >
                  <RiDeleteBin6Line size={20} />
                </a>
              </td>
            </tr>
            <tr
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px]`}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                SS-7892
              </th>
              <td className="px-6 py-4">Dallas Keuchal</td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4">xxx-xxx-xxx</td>
              <td className="px-6 py-4">anna.hines@mail.com</td>
              <td className="px-6 py-4">20-03-2024</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-1"
                >
                  <RiDeleteBin6Line size={20} />
                </a>
              </td>
            </tr>
            <tr
              className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#6B7280] text-[14px] `}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#282F5A] bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-[#282F5A]"
              >
                SS-7892
              </th>
              <td className="px-6 py-4">Dallas Keuchal</td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4">xxx-xxx-xxx</td>
              <td className="px-6 py-4">anna.hines@mail.com</td>
              <td className="px-6 py-4">20-03-2024</td>
              <td className="px-6 py-4 ">
                {" "}
                <a className="flex items-center gap-x-1">
                  <GoDotFill color={"#2AB108"} size={20} />
                  <p>Active</p>
                </a>{" "}
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                >
                  <FaRegEdit size={20} />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-1"
                >
                  <RiDeleteBin6Line size={20} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
      {[
        "/en/employees/all-employees",
        "/en/employees/employee-profile",
      ].includes(pathname) ? (
        <>
          <GlobalModal isOpenModal={editEmployeeModalIsOpen}>
            <EditModalContent />
          </GlobalModal>
          <GlobalModal isOpenModal={deleteEmployeeModalIsOpen}>
            <DeleteModalContent />
          </GlobalModal>
          <GlobalModal isOpenModal={profileEmployeeModalIsOpen}>
            <ProfileModalContent />
          </GlobalModal>
        </>
      ) : [
          "/en/leave-management/all-leave-request",
          "/en/leave-management/leave-type",
          "/en/leave-management/leave-balance",
        ].includes(pathname) ? (
        <>
          <GlobalModal isOpenModal={editLeaveModallIsOpen}>
            <EditLeaveModalContent />
          </GlobalModal>
          <GlobalModal isOpenModal={deleteLeaveModalIsOpen}>
            <DeleteModalContent />
          </GlobalModal>
          <GlobalModal isOpenModal={profileLeaveModalIsOpen}>
            <ProfileLeaveModalContent />
          </GlobalModal>
        </>
      ) : null}
    </div>
  );
};

export default Table;
