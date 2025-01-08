// components/sections/Education.tsx
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface Education {
  school: string;
  degree: string;
  duration: string;
  description?: string;
}

interface EducationProps {
  education: Education[];
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  school: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  degree: {
    fontSize: 12,
    marginBottom: 2,
  },
  duration: {
    fontSize: 11,
    fontStyle: "italic",
    color: "#666666",
    marginBottom: 5,
  },
  description: {
    fontSize: 11,
    lineHeight: 1.4,
    marginBottom: 10,
  },
});

const Education: React.FC<EducationProps> = ({ education }) => (
  <View style={styles.section}>
    <Text style={styles.title}>Education</Text>
    {education.map((edu, index) => (
      <View key={index}>
        <Text style={styles.school}>{edu.school}</Text>
        <Text style={styles.degree}>{edu.degree}</Text>
        <Text style={styles.duration}>{edu.duration}</Text>
        {edu.description && (
          <Text style={styles.description}>{edu.description}</Text>
        )}
      </View>
    ))}
  </View>
);

export default Education;
