import React from "react";
import { ScrollView, Image as RNImage } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import InputCard from "../InputCard/InputCard";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../themes/colors";
import useImagePicker from "../../../hooks/use-image-picker";
import Icon from "../../../components/Icon";
const profileCircle = require("../../../../assets/images/profile-circle.png");
const defaultImage = RNImage.resolveAssetSource(profileCircle).uri;

interface IUserData {
    name: string;
    contact: string;
    avatar: string;
    email: string;
    address: string;
    dob: string;
}

const ProfileScreen = () => {
    const navigation = useNavigation();
    const { pickImage, image } = useImagePicker({});
    const [userData, setUserData] = React.useState<IUserData>({});

    const fields = [
        {
            label: "Name",
            value: userData?.name,
            navigate: "EditName",
        },
        {
            label: "Email",
            value: userData?.email,
            navigate: "EditEmail",
        },
        {
            label: "Contact",
            value: userData?.contact,
            navigate: "EditContact",
        },
        {
            label: "Address",
            value: userData?.address,
            navigate: "EditAddress",
        },
        {
            label: "Date of Birth",
            value: userData?.dob,
            navigate: "EditDOB",
        },
        {
            label: "Password",
            value: "**************",
            navigate: "EditPassword",
        },
    ];

    React.useEffect(() => {
        setUserData((prev) => ({
            ...prev,
            avatar: image || userData?.avatar || defaultImage,
        }));
    }, [image]);

    React.useLayoutEffect(() => {
        const data: IUserData = {
            avatar: "",
            name: "John Doe",
            email: "woman@femail.com",
            contact: "+1325922132222",
            address: "",
            dob: "22 April, 1997",
        };

        setUserData(data);
    }, []);

    return (
        <Screen pt={30} title={"Profile"} leftIcon={false}>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Profile mx={20} mb={20}>
                    <AvatarContainer>
                        <Avatar
                            source={{
                                uri: userData?.avatar || defaultImage,
                            }}
                        />
                        <IconContainer>
                            <Icon onPress={pickImage} name="camera" size={20} />
                        </IconContainer>
                    </AvatarContainer>
                    <Text fontSize={16} fontWeight={600} mt={16} mx="auto">
                        {userData.name}
                    </Text>
                    <Text
                        color={colors.gray200}
                        fontSize={14}
                        fontWeight={400}
                        mt={6}
                        mx="auto"
                    >
                        {userData.dob}
                    </Text>
                </Profile>

                <Text px={16} pb={16} fontSize={18} fontWeight={700}>
                    Profile Information
                </Text>

                <Container px={16}>
                    {fields.map((field, index) => (
                        <InputCard
                            key={index}
                            value={field.value || "Not Added"}
                            label={field.label}
                            onEdit={() =>
                                navigation.navigate(field.navigate, {
                                    value: field.value,
                                })
                            }
                        />
                    ))}
                </Container>
            </ScrollView>
        </Screen>
    );
};

export default ProfileScreen;

const Container = styled.View`
    ${Spacing}
`;

const Profile = styled.View`
    border: 1px solid ${colors.light200};
    padding: 20px;
    border-radius: 20px;
    position: relative;

    ${Spacing}
`;

const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 0 auto;
`;

const IconContainer = styled.View`
    background: #fff;
    padding: 8px;
    border-radius: 50px;
    position: absolute;
    right: 0;
    bottom: 0;
`;

const AvatarContainer = styled.View`
    margin: 0 auto;
    position: relative;
`;
