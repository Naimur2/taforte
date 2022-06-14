import React from "react";
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";

import Icon from "../components/Icon";
import Contacts from "./Contacts";
import Home from "./Home";
import Notifications from "./Notifications";
import Profile from "./Profile";
import colors from "../themes/colors";

interface TabIcon {
    [key: string]: {
        active: string;
        inactive: string;
    };
}

const AppTab = () => {
    const _renderIcon = (routeName: string, selectedTab: string) => {
        const iconNames: TabIcon = {
            home: {
                active: "home-fill",
                inactive: "home",
            },
            contacts: {
                active: "telephone-fill",
                inactive: "telephone",
            },
            notifications: {
                active: "notification-fill",
                inactive: "notification",
            },
            profile: {
                active: "user-fill",
                inactive: "user",
            },
        };

        if (!iconNames[routeName]) {
            return null;
        }

        const isActive = routeName === selectedTab;

        return (
            <Icon
                name={
                    isActive
                        ? iconNames[routeName].active
                        : iconNames[routeName].inactive
                }
                size={25}
                color={isActive ? colors.secondary : colors.gray100}
            />
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <CurvedBottomBar.Navigator
                style={styles.bottomBar}
                strokeWidth={0.5}
                height={55}
                circleWidth={55}
                bgColor="white"
                initialRouteName="title1"
                borderTopLeftRight
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircle}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                            }}
                            onPress={() => Alert.alert("Click Action")}
                        >
                            <Icon name={"scan"} color="white" size={25} />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBar.Screen
                    name="home"
                    position="left"
                    component={({ navigate }) => <Home navigate={navigate} />}
                />
                <CurvedBottomBar.Screen
                    name="contacts"
                    position="left"
                    component={({ navigate }) => (
                        <Contacts navigate={navigate} />
                    )}
                />
                <CurvedBottomBar.Screen
                    name="notifications"
                    position="right"
                    component={({ navigate }) => (
                        <Notifications navigate={navigate} />
                    )}
                />
                <CurvedBottomBar.Screen
                    name="profile"
                    position="right"
                    component={({ navigate }) => (
                        <Profile navigate={navigate} />
                    )}
                />
            </CurvedBottomBar.Navigator>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        marginVertical: 5,
    },
    bottomBar: {},
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 30,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: "gray",
    },
    img: {
        width: 30,
        height: 30,
    },
});

export default AppTab;
