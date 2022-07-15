import * as Yup from "yup";

export const LoginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    },
    {
        abortEarly: false,
    }
);

export const RegisterSchema = Yup.object().shape(
    {
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
    },
    {
        abortEarly: false,
    }
);

export const ForgetPasswordSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
    },
    {
        abortEarly: false,
    }
);

export const AddNewFieldSchema = Yup.object().shape(
    {
        label: Yup.string().required("Title is required"),
    },
    {
        abortEarly: false,
    }
);

export const AddNewContactsSchema = Yup.object().shape(
    {
        name: Yup.string().required("Name is required"),
        phone: Yup.string().required("Phone is required"),
    },
    {
        abortEarly: false,
    }
);
