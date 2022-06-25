import React, { useRef, useState, useEffect } from 'react';
import { Camera } from "expo-camera";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component"
import styled from "styled-components/native";

const ProfileCamera = style(Camera)`
	width: 100%;
	height: 100%;
`;

export const CameraScreen = () => {
	const [ hasPermission, setHasPermission ] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	const cameraRef = useRef();
	return (
		<ProfileCamera ref={camera => (cameraRef.current = camera)} type={Camera.Constants.Type.front}></ProfileCamera>
	)
};