// src/components/PDFDocument.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { PDFDocumentProps } from "@/types";
// Register font Inter
Font.register({
  family: "Inter",
  fonts: [
    {
      src: "/fonts/Inter_Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/fonts/Inter_Medium.ttf",
      fontWeight: 500,
    },
    {
      src: "/fonts/Inter_SemiBold.ttf",
      fontWeight: 600,
    },
    {
      src: "/fonts/Inter_Bold.ttf",
      fontWeight: 700,
    },
  ],
});
// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  textheader: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 16,
  },
  textSubHeader: {
    fontSize: 13,
    fontWeight: 700,
  },
  textSubSubHeader: {
    fontSize: 11,
    fontWeight: 500,
    marginBottom: 8,
  },
  textContent: {
    fontSize: 11,
    color: "#575757",
    fontWeight: 400,
  },
  textlg: {
    fontSize: 12,
    fontWeight: 500,
  },
  textmd: {
    fontSize: 11,
    color: "#575757",
  },
  text2XL: {
    fontSize: 24,
    fontWeight: 800,
  },
  page: {
    padding: 32,
    fontFamily: "Inter",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  about: {
    fontSize: 8,
  },
  header: {
    borderRadius: 8,
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 4,
  },
  text: {
    fontSize: 8,
    color: "#4b5563",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  sectionContent: {
    marginBottom: 24,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillPill: {
    backgroundColor: "#f3f4f6",
    padding: "4 12",
    borderRadius: 16,
  },
  skillText: {
    fontSize: 12,
    color: "#374151",
  },
});

const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Text style={{ color: "black", fontSize: 24, fontWeight: 700 }}>
            {data.personalInfo.name || ""}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 12,
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.5",
            }}
          >
            {data.personalInfo.title || ""}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginTop: 12,
            }}
          >
            <Text style={{ fontSize: 11, color: "#575757" }}>
              {data.personalInfo.education || ""}
            </Text>
            <Text style={{ fontSize: 11, color: "#575757" }}>
              Date of Birth: {data.personalInfo.dob || ""}
            </Text>
            <Text style={{ fontSize: 11, color: "#575757" }}>
              {data.personalInfo.email || ""}
            </Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }} />
        {/* About Me Section */}
        <View>
          <Text style={styles.textheader}>About Me</Text>
          <Text style={styles.textContent}>{data.aboutMe}</Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }} />
        {/* Skills Section */}
        <View>
          <Text style={styles.textheader}>Key Skills & Expertise</Text>
          <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {data.skills.map((skill: string, index: number) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  gap: 6,

                  flexDirection: "row",
                }}
              >
                {/* Dot */}
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: "black",
                    borderRadius: 1000,
                    marginTop: 4,
                  }}
                />
                {/* Text */}
                <Text style={styles.textContent}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }} />
        {/* Exp Section */}
        <View>
          <Text style={styles.textheader}>Experience</Text>
          {data.experience?.map((company, index) => (
            <View key={index} style={{ marginBottom: 15 }}>
              <View
                style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
              >
                <Text style={styles.textSubHeader}>{company.name}</Text>
              </View>

              {company.positions?.map((position, posIndex) => (
                <View key={posIndex} style={styles.textSubSubHeader}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 5,
                      marginTop: 12,
                    }}
                  >
                    <Text style={styles.textSubSubHeader}>
                      {position.title}
                    </Text>
                    <Text style={{ fontSize: 10, color: "#575757" }}>
                      {position.startDate} - {position.endDate || "Present"}
                    </Text>
                  </View>

                  {position.responsibilities?.map(
                    (responsibility, respIndex) => (
                      <View
                        key={index}
                        style={{
                          display: "flex",
                          gap: 6,

                          flexDirection: "row",
                        }}
                      >
                        {/* Dot */}
                        <View
                          key={respIndex}
                          style={{
                            width: 4,
                            height: 4,
                            backgroundColor: "black",
                            borderRadius: 1000,
                            marginTop: 4,
                          }}
                        />
                        {/* Text */}
                        <Text style={styles.textContent}>{responsibility}</Text>
                      </View>
                    )
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }} />

        {/* Key Projects Section */}
        <View>
          <Text style={styles.textheader}>Key Projects</Text>

          {data.keyProjects.map((project, index) => (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 16,
              }}
              key={index}
            >
              <Text style={styles.textSubHeader}>{project.title}</Text>

              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <Text>
                  <Text
                    style={[
                      styles.textContent,
                      { fontWeight: "medium", color: "black" },
                    ]}
                  >
                    Role:{" "}
                  </Text>
                  <Text style={styles.textContent}> {project.role}</Text>
                </Text>

                <Text>
                  <Text
                    style={[
                      styles.textContent,
                      { fontWeight: "medium", color: "black" },
                    ]}
                  >
                    Objective:
                  </Text>
                  <Text style={styles.textContent}> {project.objective}</Text>
                </Text>

                <Text>
                  <Text
                    style={[
                      styles.textContent,
                      { fontWeight: "medium", color: "black" },
                    ]}
                  >
                    Outcome:{" "}
                  </Text>
                  <Text style={styles.textContent}> {project.outcome}</Text>
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }} />

        {/* Certificates Section */}
        <View>
          <Text style={styles.textheader}>Certificates</Text>
          {data.certificates?.map((certificate, index) => (
            <View key={index} style={{ marginBottom: 15 }}>
              <Text style={styles.textSubHeader}>{certificate.title}</Text>
              <Text style={styles.textContent}>{certificate.credential}</Text>
            </View>
          ))}
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }} />

        {/* Education Section */}
        <View>
          <Text style={styles.textheader}>Education Background</Text>
          {data.education?.map((education, index) => (
            <View key={index} style={{ marginBottom: 15 }}>
              <Text style={styles.textSubHeader}>
                {education.universityName}
              </Text>
              <Text style={styles.textContent}>
                {education.major} - {education.gpa}
              </Text>
              <Text style={styles.textContent}>{education.graduationYear}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
