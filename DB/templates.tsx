import { ITemplateProps } from "../src/interfaces/index";

const allTemplates: ITemplateProps[] = [
    {
        _id: "1",
        name: "Template 1",
        group: "grp1",
        templates: [
            {
                _id: "1",
                title: "Template 1",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp1",
            },
            {
                _id: "2",
                title: "Template 2",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp1",
            },
            {
                _id: "3",
                title: "Template 3",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp1",
            },
        ],
    },
    {
        _id: "2",
        name: "Template 2",
        group: "grp2",
        templates: [
            {
                _id: "4",
                title: "Template 1",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp2",
            },
            {
                _id: "5",
                title: "Template 2",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp2",
            },
            {
                _id: "6",
                title: "Template 3",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp2",
            },
        ],
    },
    {
        _id: "3",
        name: "Template 2",
        group: "grp3",
        templates: [
            {
                _id: "7",
                title: "Template 1",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp3",
            },
            {
                _id: "8",
                title: "Template 2",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp3",
            },
            {
                _id: "9",
                title: "Template 3",
                image: "https://t4.ftcdn.net/jpg/03/98/35/91/360_F_398359128_fCeLDN5UOrirgsgmEW81EYmUeVmJpDLL.jpg",
                group: "grp3",
            },
        ],
    },
];

export const filterdTemplates = (group: string): ITemplateProps[] => {
    return allTemplates.filter((template) => template.group === group)[0][
        "templates"
    ];
};

export default allTemplates;
