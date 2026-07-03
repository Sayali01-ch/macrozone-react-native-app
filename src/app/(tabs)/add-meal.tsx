import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import HomeHeader from '@/components/HomeHeader';

export default function AddMealScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>
      <HomeHeader />
      <Link href="../some-other-route">
        <Text style={{ fontSize: 18, color: '#007bff' }}>Go to Details</Text>
      </Link>
    </ScrollView>
  );
}