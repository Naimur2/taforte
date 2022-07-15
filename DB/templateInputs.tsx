import { IAddCardFieldProps } from "../src/interfaces/index";

const inputs: IAddCardFieldProps[] = [
    {
        _id: 1,
        label: "Name",
        placeholder: "Enter Name",
        order: 1,
        templateId: 1,
    },
    {
        _id: 2,
        label: "Phone Number",
        placeholder: "Enter Phone Number",
        order: 2,
        templateId: 1,
    },
    {
        _id: 3,
        label: "Email Address",
        placeholder: "Enter Email Address",
        order: 3,
        templateId: 1,
    },
    {
        _id: 4,
        label: "Enter Company",
        placeholder: "Enter Company",
        order: 4,
        templateId: 1,
    },
    {
        _id: 5,
        label: "Name",
        placeholder: "Enter Name",
        order: 1,
        templateId: 2,
    },
    {
        _id: 6,
        label: "Phone Number",
        placeholder: "Enter Phone Number",
        order: 2,
        templateId: 2,
    },
    {
        _id: 7,
        label: "Email Address",
        placeholder: "Enter Email Address",
        order: 3,
        templateId: 2,
    },
    {
        _id: 8,
        label: "Enter Company",
        placeholder: "Enter Company",
        order: 4,
        templateId: 2,
    },
    {
        _id: 9,
        label: "Name",
        placeholder: "Enter Name",
        order: 1,
        templateId: 3,
    },
    {
        _id: 10,
        label: "Phone Number",
        placeholder: "Enter Phone Number",
        order: 2,
        templateId: 3,
    },
    {
        _id: 11,
        label: "Email Address",
        placeholder: "Enter Email Address",
        order: 3,
        templateId: 3,
    },
    {
        _id: 12,
        label: "Enter Company",
        placeholder: "Enter Company",
        order: 4,
        templateId: 3,
    },
];

export const filterTemplatesById = (templateId: string | number) => {
    return inputs
        .filter((input) => input.templateId === templateId)
        .sort((a, b) => a?.order - b?.order);
};

export default inputs;
