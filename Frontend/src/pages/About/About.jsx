import React, { useEffect } from "react";
import CampusImage from "../../assets/Background.jpg";
import LibraryImage from "../../assets/TrandngImages/Image4.jpg";
import LabImage from "../../assets/TrandngImages/Image2.jpg";
import SportsImage from "../../assets/TrandngImages/Image5.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About | SALU Ghotki Campus";
  }, []);

  // Color scheme definition
  const colors = {
    primary: "#e9c545", // Main yellow
    primaryDark: "#d4af37", // Darker yellow
    secondary: "#2c3e50", // Navy blue
    secondaryLight: "#34495e", // Lighter navy
    accent: "#3498db", // Professional blue
    accentDark: "#2980b9", // Darker blue
    lightGray: "#f8f9fa",
    darkGray: "#7f8c8d",
    success: "#27ae60",
    purple: "#8e44ad",
    coral: "#e74c3c",
    teal: "#1abc9c",
    white: "#ffffff",
    black: "#2d3436",
  };

  return (
    <div
      className="min-h-75 w-100"
      style={{
        backgroundColor: colors.lightGray,
        // Responsive padding using media queries in style tag
      }}
    >
      {/* Main container with responsive padding */}
      <div
        className="d-flex flex-column"
        style={{
          // Base padding for mobile
          padding: "1.5rem",
          // Medium screens
          "@media (min-width: 768px)": {
            padding: "2rem 2.5rem",
          },
          // Large screens
          "@media (min-width: 992px)": {
            padding: "3rem 4rem",
          },
          // Extra large screens
          "@media (min-width: 1200px)": {
            padding: "3rem 5rem",
          },
        }}
      >
        {/* Hero Section */}
        <div className="text-center mb-5 mb-lg-6">
          <div
            className="hero-image mb-4"
            style={{
              width: "100%",
              color: colors.white,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h1
              className="mb-2"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: colors.secondary,
                fontWeight: "800",
                letterSpacing: "-0.5px",
                lineHeight: "1.2",
              }}
            >
              About Ghotki Campus
            </h1>
            <div
              style={{
                width: "clamp(100px, 30vw, 200px)",
                height: "clamp(4px, 1.5vw, 10px)",
                backgroundColor: colors.primary,
                margin: "0 auto",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>

        {/* Campus Introduction with Side Image - Flexbox for responsiveness */}
        <div className="mb-5 mb-lg-6">
          <div className="d-flex flex-column gap-4 gap-lg-5 align-items-center">
            <div
              className="flex-fill w-100"
              style={{
                flexBasis: "100%",
                "@media (min-width: 992px)": {
                  flexBasis: "55%",
                },
              }}
            >
              <h3
                className="mb-3"
                style={{
                  color: colors.secondary,
                  fontWeight: "700",
                  fontSize: "clamp(1.5rem, 4vw, 1.8rem)",
                  lineHeight: "1.3",
                }}
              >
                Welcome to SALU Ghotki Campus
              </h3>
              <p
                className="mb-3"
                style={{
                  lineHeight: "1.7",
                  color: colors.secondaryLight,
                  fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                }}
              >
                Ghotki Campus is located in the heart of the city, offering
                students an unparalleled opportunity to study at a prestigious
                university. The campus boasts a rich and vibrant atmosphere,
                allowing students to engage in meaningful discussions and
                collaborate with peers.
              </p>
              <p
                style={{
                  lineHeight: "1.7",
                  color: colors.secondaryLight,
                  fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                }}
              >
                Established in 2016 and formally inaugurated on{" "}
                <strong style={{ color: colors.primary }}>
                  December 19, 2016
                </strong>
                , Shah Abdul Latif University Ghotki Campus was created to meet
                the growing need for quality higher education in upper Sindh.
              </p>

              {/* Stats Section - Flexbox for responsive layout */}
              <div className="d-flex flex-wrap gap-3 mt-4 mt-lg-5">
                <div
                  className="stat-box text-center p-3"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                    borderRadius: "8px",
                    color: colors.white,
                    flex: "1 1 calc(33.333% - 1rem)",
                    minWidth: "120px",
                    maxWidth: "150px",
                    boxShadow: "0 5px 15px rgba(233, 197, 69, 0.3)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <h4 className="mb-0" style={{ fontWeight: "700" }}>
                    2016
                  </h4>
                  <small>Established</small>
                </div>
                <div
                  className="stat-box text-center p-3"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
                    borderRadius: "8px",
                    color: colors.white,
                    flex: "1 1 calc(33.333% - 1rem)",
                    minWidth: "120px",
                    maxWidth: "150px",
                    boxShadow: "0 5px 15px rgba(52, 152, 219, 0.3)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <h4 className="mb-0" style={{ fontWeight: "700" }}>
                    3
                  </h4>
                  <small>Programs</small>
                </div>
                <div
                  className="stat-box text-center p-3"
                  style={{
                    background: `linear-gradient(135deg, ${colors.teal} 0%, #16a085 100%)`,
                    borderRadius: "8px",
                    color: colors.white,
                    flex: "1 1 calc(33.333% - 1rem)",
                    minWidth: "120px",
                    maxWidth: "150px",
                    boxShadow: "0 5px 15px rgba(26, 188, 156, 0.3)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <h4 className="mb-0" style={{ fontWeight: "700" }}>
                    1700+
                  </h4>
                  <small>Books</small>
                </div>
              </div>
            </div>{" "}
            {/* Campus Image - Responsive sizing */}
            <div
              className="flex-fill w-100 text-center"
              style={{
                flexBasis: "100%",
                "@media (min-width: 992px)": {
                  flexBasis: "45%",
                },
              }}
            >
              <img
                src={CampusImage}
                alt="SALU Ghotki Campus"
                className="campus-image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  borderRadius: "10px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards - Responsive flex layout */}
        <div className="mb-5 mb-lg-6">
          <div className="d-flex flex-column flex-md-row gap-4">
            <div
              className="flex-fill w-100"
              style={{
                background: colors.white,
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                padding: "1.5rem",
                "@media (min-width: 768px)": {
                  padding: "2rem",
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "4px",
                  background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                }}
              ></div>
              <h5
                className="mb-3"
                style={{
                  color: colors.secondary,
                  fontWeight: "700",
                  fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                }}
              >
                🎯 Our Vision
              </h5>
              <p
                style={{
                  lineHeight: "1.7",
                  color: colors.secondaryLight,
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  marginBottom: 0,
                }}
              >
                To develop skilled, empowered, and responsible graduates who
                contribute to Pakistan's economic, industrial, and social
                development, while fostering academic freedom, curiosity, and
                integrity.
              </p>
            </div>

            <div
              className="flex-fill w-100"
              style={{
                background: colors.white,
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                padding: "1.5rem",
                "@media (min-width: 768px)": {
                  padding: "2rem",
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "4px",
                  background: `linear-gradient(90deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
                }}
              ></div>
              <h5
                className="mb-3"
                style={{
                  color: colors.secondary,
                  fontWeight: "700",
                  fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                }}
              >
                🚀 Our Mission
              </h5>
              <p
                style={{
                  lineHeight: "1.7",
                  color: colors.secondaryLight,
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  marginBottom: 0,
                }}
              >
                To provide affordable, accessible, and high-quality
                undergraduate programs that meet national and international
                standards, supported by qualified faculty and modern teaching
                methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Programs - Responsive grid */}
        <div className="mb-5 mb-lg-6">
          <h3
            className="text-center mb-4 mb-lg-5"
            style={{
              color: colors.secondary,
              fontWeight: "700",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              position: "relative",
              lineHeight: "1.3",
            }}
          >
            Our Academic Programs
            <div
              style={{
                width: "clamp(60px, 15vw, 80px)",
                height: "3px",
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                margin: "10px auto 0",
                borderRadius: "2px",
              }}
            />
          </h3>
          <div className="d-flex flex-column flex-md-row flex-wrap gap-4 justify-content-center">
            {[
              {
                icon: "📊",
                title: "BBA",
                subtitle: "Business Administration",
                description: "4-Year Bachelor Program",
                color: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
              },
              {
                icon: "💻",
                title: "BS Computer Science",
                subtitle: "Computer Science",
                description: "4-Year Bachelor Program",
                color: `linear-gradient(135deg, ${colors.purple} 0%, #9b59b6 100%)`,
              },
              {
                icon: "📚",
                title: "BS English",
                subtitle: "Language & Literature",
                description: "4-Year Bachelor Program",
                color: `linear-gradient(135deg, ${colors.teal} 0%, #16a085 100%)`,
              },
            ].map((program, index) => (
              <div
                key={index}
                className="program-card"
                style={{
                  background: colors.white,
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  padding: "1.5rem",
                  flex: "1 1 100%",
                  maxWidth: "100%",
                  "@media (min-width: 576px)": {
                    flex: "1 1 calc(50% - 1rem)",
                    maxWidth: "calc(50% - 1rem)",
                  },
                  "@media (min-width: 768px)": {
                    flex: "1 1 calc(33.333% - 1.5rem)",
                    maxWidth: "calc(33.333% - 1.5rem)",
                  },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.08)";
                }}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <div
                      style={{
                        width: "clamp(60px, 15vw, 80px)",
                        height: "clamp(60px, 15vw, 80px)",
                        background: program.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        color: colors.white,
                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      {program.icon}
                    </div>
                  </div>
                  <h5
                    style={{
                      color: colors.secondary,
                      fontWeight: "700",
                      marginBottom: "8px",
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                    }}
                  >
                    {program.title}
                  </h5>
                  <p
                    style={{
                      color: colors.primary,
                      fontWeight: "600",
                      marginBottom: "8px",
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    }}
                  >
                    {program.subtitle}
                  </p>
                  <small
                    style={{
                      color: colors.darkGray,
                      fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                    }}
                  >
                    {program.description}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Facilities - Responsive grid */}
        <div className="mb-5 mb-lg-6">
          <h3
            className="text-center mb-4 mb-lg-5"
            style={{
              color: colors.secondary,
              fontWeight: "700",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              position: "relative",
              lineHeight: "1.3",
            }}
          >
            Campus Facilities
            <div
              style={{
                width: "clamp(60px, 15vw, 80px)",
                height: "3px",
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                margin: "10px auto 0",
                borderRadius: "2px",
              }}
            />
          </h3>
          <div className="d-flex flex-column flex-md-row flex-wrap gap-4">
            {[
              {
                title: "Modern Library",
                description: "1700+ books across various disciplines",
                image: LibraryImage,
                borderColor: colors.accent,
              },
              {
                title: "Sports Complex",
                description: "Cricket, Football, Hockey & more",
                image: SportsImage,
                borderColor: colors.success,
              },
              {
                title: "Computer Labs",
                description: "LAN/WAN connected modern labs",
                image: LabImage,
                borderColor: colors.purple,
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="facility-card"
                style={{
                  background: colors.white,
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: `1px solid ${colors.lightGray}`,
                  flex: "1 1 100%",
                  maxWidth: "100%",
                  "@media (min-width: 768px)": {
                    flex: "1 1 calc(33.333% - 1.5rem)",
                    maxWidth: "calc(33.333% - 1.5rem)",
                  },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "clamp(180px, 40vw, 220px)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "4px",
                      background: facility.borderColor,
                    }}
                  />
                </div>

                <div className="p-3 p-md-4">
                  <h6
                    style={{
                      color: colors.secondary,
                      fontWeight: "700",
                      marginBottom: "8px",
                      fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                    }}
                  >
                    {facility.title}
                  </h6>
                  <small
                    style={{
                      color: colors.secondaryLight,
                      lineHeight: "1.6",
                      fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                    }}
                  >
                    {facility.description}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Responsive grid */}
        <div className="mb-5 mb-lg-6">
          <h3
            className="text-center mb-4 mb-lg-5"
            style={{
              color: colors.secondary,
              fontWeight: "700",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              position: "relative",
              lineHeight: "1.3",
            }}
          >
            Why Choose SALU Ghotki?
            <div
              style={{
                width: "clamp(60px, 15vw, 80px)",
                height: "3px",
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                margin: "10px auto 0",
                borderRadius: "2px",
              }}
            />
          </h3>
          <div className="d-flex flex-row flex-wrap gap-3 justify-content-center">
            {[
              {
                icon: "🏆",
                text: "HEC Recognized Campus",
                color: colors.primary,
              },
              { icon: "👨‍🏫", text: "Qualified Faculty", color: colors.accent },
              {
                icon: "💰",
                text: "Affordable Education",
                color: colors.success,
              },
              {
                icon: "🏛️",
                text: "Modern Infrastructure",
                color: colors.purple,
              },
              {
                icon: "🌐",
                text: "Industry-Relevant Curriculum",
                color: colors.teal,
              },
              { icon: "🤝", text: "Career Support", color: colors.coral },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-item"
                style={{
                  background: colors.white,
                  borderRadius: "10px",
                  border: `1px solid ${colors.lightGray}`,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: "1rem",
                  flex: "1 1 calc(50% - 0.75rem)",
                  maxWidth: "calc(50% - 0.75rem)",
                  minWidth: "140px",
                  "@media (min-width: 576px)": {
                    flex: "1 1 calc(33.333% - 1rem)",
                    maxWidth: "calc(33.333% - 1rem)",
                  },
                  "@media (min-width: 768px)": {
                    flex: "1 1 calc(16.666% - 1rem)",
                    maxWidth: "calc(16.666% - 1rem)",
                  },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = colors.lightGray;
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    marginBottom: "8px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {item.icon}
                </div>
                <small
                  style={{
                    color: colors.secondary,
                    fontWeight: "600",
                    fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
                    lineHeight: "1.4",
                  }}
                >
                  {item.text}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA - Responsive */}
        <div
          className="text-center"
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
            borderRadius: "12px",
            color: colors.white,
            boxShadow: "0 10px 30px rgba(233, 197, 69, 0.3)",
            position: "relative",
            overflow: "hidden",
            padding: "clamp(2rem, 5vw, 3rem) 1rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              opacity: "0.3",
            }}
          />

          <h4
            className="mb-3"
            style={{
              fontWeight: "700",
              fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
              position: "relative",
              lineHeight: "1.3",
            }}
          >
            Ready to Start Your Journey?
          </h4>
          <p
            className="mb-4"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              opacity: "0.9",
              position: "relative",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Join SALU Ghotki Campus and shape your future with quality education
          </p>
          <button
            onClick={() => {
              window.location.href = "/admission.salu-gc/admissions";
            }}
            className="btn"
            style={{
              background: colors.white,
              color: colors.secondary,
              border: "none",
              borderRadius: "8px",
              fontWeight: "700",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              transition: "all 0.3s ease",
              position: "relative",
              padding: "clamp(0.75rem, 2vw, 0.875rem) clamp(2rem, 5vw, 2.5rem)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
              e.currentTarget.style.background = colors.secondary;
              e.currentTarget.style.color = colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
              e.currentTarget.style.background = colors.white;
              e.currentTarget.style.color = colors.secondary;
            }}
          >
            Apply Now →
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Base styles for all devices */
        .min-h-75 {
          min-height: 75vh;
        }

        /* Mobile-first responsive design */
        @media (max-width: 575.98px) {
          .program-card,
          .facility-card {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }

          .feature-item {
            flex: 1 1 calc(50% - 0.75rem) !important;
            max-width: calc(50% - 0.75rem) !important;
            min-width: 120px !important;
          }
        }

        @media (max-width: 767.98px) {
          .hero-image h1 {
            font-size: 2rem !important;
          }

          .program-card {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }

          .facility-card {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .program-card {
            flex: 1 1 calc(50% - 1rem) !important;
            max-width: calc(50% - 1rem) !important;
          }

          .feature-item {
            flex: 1 1 calc(33.333% - 1rem) !important;
            max-width: calc(33.333% - 1rem) !important;
          }
        }

        @media (min-width: 992px) {
          .program-card {
            flex: 1 1 calc(33.333% - 1.5rem) !important;
            max-width: calc(33.333% - 1.5rem) !important;
          }

          .facility-card {
            flex: 1 1 calc(33.333% - 1.5rem) !important;
            max-width: calc(33.333% - 1.5rem) !important;
          }

          .feature-item {
            flex: 1 1 calc(16.666% - 1rem) !important;
            max-width: calc(16.666% - 1rem) !important;
          }
        }

        /* Hover effects */
        .program-card:hover,
        .facility-card:hover {
          transform: translateY(-10px);
        }

        .feature-item:hover {
          transform: translateY(-5px);
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default About;
