const dashboardScreen = document.getElementById("dashboard-screen");
const contentView = document.getElementById("content-view");
const sectionContainer = document.getElementById("section-content-container");

// Open Selected Section
function openSection(sectionType) {
    dashboardScreen.classList.add("hidden");
    contentView.classList.remove("hidden");

    if (sectionType === 'personal') {
        sectionContainer.innerHTML = `
            <h2 style="color: var(--text-main); margin-bottom: 0.5rem;">Personal Data</h2>
            <p style="color: var(--text-light); margin-bottom: 2rem;">Overview of academic background and technical expertise.</p>
            
            <div style="background: var(--card-bg); padding: 2rem; border-radius: 10px; border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
                <h3 style="color: var(--text-main); margin-bottom: 0.5rem;">Education</h3>
                <p style="margin-bottom: 0.5rem; color: var(--text-main);"><strong>Government Engineering College, Sreekrishnapuram (GEC Palakkad)</strong></p>
                <p style="color: var(--text-light); margin-bottom: 1rem;">APJ Abdul Kalam Technological University (KTU) | B.Tech Electrical & Electronics Engineering (EEE)</p>
                <p style="color: var(--text-light);">Cumulative GPA: 6.83</p>
            </div>

            <div style="background: var(--card-bg); padding: 2rem; border-radius: 10px; border: 1px solid var(--border-color);">
                <h3 style="color: var(--text-main); margin-bottom: 0.5rem;">Core Competencies & Focus Areas</h3>
                <p style="color: var(--text-light);">Embedded systems design, microcontroller programming (ESP32/Arduino), circuit simulation (LTSpice), hardware debugging, and robotics automation.</p>
            </div>
        `;
    } else if (sectionType === 'projects') {
        sectionContainer.innerHTML = `
            <h2 style="color: var(--text-main); margin-bottom: 0.5rem;">Projects</h2>
            <p style="color: var(--text-light); margin-bottom: 2rem;">A showcase of hardware builds, robotics, and circuit simulations.</p>
            
            <div style="display: grid; gap: 1.5rem;">
                <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--border-color);">
                    <h3 style="color: var(--text-main);">4-DOF Robotic Arm</h3>
                    <p style="color: var(--accent); font-weight: 600; font-size: 0.85rem; margin: 0.5rem 0;">ESP32 • C++ • Wi-Fi/Bluetooth • Servo Motors</p>
                    <p style="color: var(--text-light);">Designed and built a 4-degree-of-freedom robotic arm powered by an ESP32 microcontroller with custom web-based Wi-Fi and Bluetooth control interfaces.</p>
                </div>

                <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--border-color);">
                    <h3 style="color: var(--text-main);">Sensor Logic & Circuit Simulation</h3>
                    <p style="color: var(--accent); font-weight: 600; font-size: 0.85rem; margin: 0.5rem 0;">LTSpice • Analog Oscillators • 555 Timers</p>
                    <p style="color: var(--text-light);">Practical analog/digital circuit designs, V-I characteristic testing, and hardware sensor integration.</p>
                </div>
            </div>
        `;
    } else if (sectionType === 'certificates') {
        sectionContainer.innerHTML = `
            <h2 style="color: var(--text-main); margin-bottom: 0.5rem;">Certificates & Training</h2>
            <p style="color: var(--text-light); margin-bottom: 2rem;">Verified professional development, internship records, and workshop completions.</p>
            
            <div style="display: grid; gap: 1.5rem;">
                
                <!-- Ediglobe Internship -->
                <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.1); color: var(--accent); padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 600;">2-Month Internship</span>
                        <h3 style="color: var(--text-main); margin: 0.3rem 0;">Robotics Internship Completion</h3>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Hands-on practical training and project execution.</p>
                        <span style="font-size: 0.8rem; color: var(--text-light);">Ediglobe</span>
                    </div>
                    <a href="ediglobe-internship.pdf" target="_blank" class="btn-primary">View Certificate</a>
                </div>

                <!-- Ediglobe Course -->
                <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.1); color: var(--accent); padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 600;">Course Completion</span>
                        <h3 style="color: var(--text-main); margin: 0.3rem 0;">Robotics Course Certification</h3>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Completed core coursework modules during the training program.</p>
                        <span style="font-size: 0.8rem; color: var(--text-light);">Ediglobe</span>
                    </div>
                    <a href="ediglobe-course.pdf" target="_blank" class="btn-primary">View Certificate</a>
                </div>

                <!-- Pacelab Workshop -->
                <div style="background: var(--card-bg); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <span style="font-size: 0.75rem; background: rgba(255, 255, 255, 0.05); color: var(--text-light); padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 600;">Workshop</span>
                        <h3 style="color: var(--text-main); margin: 0.3rem 0;">Big Data Workshop</h3>
                        <p style="color: var(--text-light); font-size: 0.9rem;">Specialized technical workshop attendance and participation.</p>
                        <span style="font-size: 0.8rem; color: var(--text-light);">Pacelab</span>
                    </div>
                    <a href="assets/pacelab-bigdata.pdf" target="_blank" class="btn-primary">View Certificate</a>
                </div>

            </div>
        `;
    }
}

// Return to Dashboard
function goBackToDashboard() {
    contentView.classList.add("hidden");
    dashboardScreen.classList.remove("hidden");
}
