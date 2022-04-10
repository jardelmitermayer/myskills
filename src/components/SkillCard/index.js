import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native"

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#1F1E25",
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})
