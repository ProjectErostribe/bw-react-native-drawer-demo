import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const nav = useNavigation();

    const onContactMe = () => {
        nav.navigate('Contact');
    };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Contact Me" onPress={onContactMe} />
        </View>
