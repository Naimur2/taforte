import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import Screen from "../../../../components/Screen";
import { ICard } from "../../../../interfaces";
import { getTemplate } from "../../../../../DB/templates";
import ITCard from "./components/ITCard";
import { ScrollView } from "react-native";
import Button from "../../../../components/Button";
import ZoomView from "../../../common/ImageView/ZoomView";

const TemplateCard = () => {
    const navigation = useNavigation();
    const [zoomImage, setZoomImage] = React.useState<string | null>(null);
    const [template, setTemplate] = React.useState<ICard>({});

    const params = useRoute().params as { data: ICard };

    React.useLayoutEffect(() => {
        try {
            setTemplate(params?.data);
            navigation.setOptions({
                title: params?.data?.title,
            });
        } catch (error) {
            console.log(error);
        }
    }, [params]);

    console.log(params);
    return (
        <Screen>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    paddingVertical: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {zoomImage && (
                    <ZoomView
                        images={[zoomImage]}
                        isVisible={zoomImage && zoomImage !== null}
                        onClose={() => setZoomImage(null)}
                    />
                )}
                <ITCard
                    frontImage={template?.frontImage}
                    title={"Front side"}
                    onPress={() => {
                        setZoomImage(template?.frontImage);
                    }}
                />
                <ITCard
                    frontImage={template?.backImage}
                    title={"Back side"}
                    onPress={() => setZoomImage(template.backImage)}
                />
                <Button
                    onPress={() =>
                        navigation.navigate("ACManualy", {
                            data: template,
                        })
                    }
                    mt={50}
                    text="Save this template"
                />
            </ScrollView>
        </Screen>
    );
};

export default TemplateCard;
