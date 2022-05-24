import React, { useState, useEffect } from 'react';
import {
  Text,
  Platform,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good night')
    }

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome, Jardel
      </Text>

      <Text style={styles.gretting}>
        {gretting}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        MySkills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} />
        )}
      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  gretting: {
    color: '#fff'
  }
})