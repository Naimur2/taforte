import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Share } from "react-native";
import Button from "../../../components/Button";
import Screen from "../../../components/Screen";
import { ICard } from "../../../interfaces";
import ZoomView from "../../common/ImageView/ZoomView";
import ITCard from "../../common/ITCard/ITCard";
import IconCont from "./components/IconCont";

const ViewMyCard = () => {
    const navigation = useNavigation();
    const [zoomImage, setZoomImage] = React.useState<string | null>(null);

    const [myCard, setMycard] = React.useState<ICard>({});

    const params = useRoute().params as { data: ICard };

    React.useLayoutEffect(() => {
        try {
            setMycard(params?.data);
            navigation.setOptions({
                title: params?.data?.title,
            });
        } catch (error) {
            console.log(error);
        }
    }, [params]);

    const openShareDialogAsync = async (uri: string) => {
        try {
            await Share.share({
                message: `${myCard.title}`,
                url: uri,
                title: `${myCard.title}`,
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Screen>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    paddingTop: 20,
                    paddingBottom: 40,
                    flex: 1,
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
                    hasShare
                    frontImage={myCard?.frontImage}
                    title={"Front side"}
                    onShare={() => openShareDialogAsync(myCard?.frontImage)}
                    onPress={() => {
                        setZoomImage(myCard?.frontImage);
                    }}
                />
                <ITCard
                    hasShare
                    frontImage={myCard?.backImage}
                    title={"Back side"}
                    onShare={() => openShareDialogAsync(myCard?.backImage)}
                    onPress={() => setZoomImage(myCard.backImage)}
                />

                <IconCont title="Qr code" />

                <Button
                    onPress={() =>
                        navigation.navigate("ACManualy", {
                            data: myCard,
                        })
                    }
                    mt={20}
                    mb={20}
                    text="Edit Card"
                />
            </ScrollView>
        </Screen>
    );
};

export default ViewMyCard;
