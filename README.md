### Building and running the application

When you're ready, start the application by running (you must have docker installed for this option):
`docker compose up --build`.

Otherwise, run `npm start` in both client and server.

Now, head over to `localhost:3000` to see the website. 

## 🪄Inspiration Behind Billify 💡

Having many friends in the healthcare industry, one of the biggest complaints among medical practitioners is the large amount of bureaucracy and disorganization that occurs within the hospital, ultimately leading to less time spent tending to the people who matter most: the patients. 

Billify aims to reduce the administrative workload of workers in the healthcare industry by automating time consuming and repetitive tasks. By automating mundane and repetitive tasks, such as converting doctors' notes into billing forms and providing succinct descriptions of key medical terminology, Billify promises to streamline processes, boost efficiency, and most importantly, allow healthcare professionals to refocus on patient care. 

## 🏥 What Billify does ⚒️

Billify analyzes electronic or hand-written medical history records of patients, and annotates the data with crucial information on patient history, key medications, procedures, and illnesses/ailments using Natural Language Processing. Billify then serves as a database, providing short references on complex terminology but most importantly, providing recommended billing codes on prescribed courses of treatment/diagnostics, based on keyword analysis. 

Billify targets three main factors that can impact doctor's workflows: 

1. Finding tedious, rapidly-changing billing codes for services they've provided to patients. Healthcare providers must refer to the medical documentation notes in order to determine how to bill patients for what services have been performed. Billify uses a database of current, up-to-date billing codes web scraped from official websites, analyzing the tests ordered and treatments prescribed, implementing keyword analysis to determine likely billing codes for these tests.

2. Analyzes pages of Medical History and past Medical Evaluations, annotating and highlighting Medical Devices used by the patient, previous drug history, previous illness history, as well as previous treatments prescribed to the patient.

3. Serving as a reference for common medical terminology and drugs, so that doctors can easily be refreshed about their meaning while not having to open Google to do searches on these terms

## 🛠️ How We Built Billify 🚀

The journey of creating Billify, our state-of-the-art productivity assistant for healthcare professionals, was marked by a series of strategic technical decisions and innovative implementations.

At the core of our development process was the **MERN stack**, encompassing MongoDB, Express.js, React, and Node.js, which provided a robust foundation for our full-stack web application. This choice allowed us to efficiently manage the database, server, and frontend components of Billify, ensuring a seamless user experience.

To process and analyze medical texts, we integrated Google Cloud's **Healthcare Natural Language API**. This powerful tool is pivotal in identifying and highlighting key medical terms and phrases, greatly enhancing the accuracy and efficiency of data processing. Additionally, we harnessed Google Vision API's capabilities to convert handwritten medical notes into digital text, facilitating the swift analysis and conversion into billing forms.

A significant part of our project involved keeping Billify up-to-date with the latest billing data. For this, we employed web scraping libraries in JavaScript and Python, extracting current billing information from various online sources. This ensures that Billify remains current and reliable in its billing recommendations.

The development and testing phases were streamlined using **Postman**, which allowed us to meticulously test our APIs, ensuring robustness and reliability. **Docker** played a crucial role in our workflow, enabling us to containerize our application for easy deployment and scaling. This combination of Postman and Docker not only enhanced our development efficiency but also guaranteed that Billify would perform consistently across different environments.

Through these combined technologies, Billify has emerged as an invaluable tool for medical professionals. By automating the conversion of medical notes into billing forms and providing quick access to medical terminology, Billify effectively enhances productivity, allowing healthcare providers to focus more on patient care and less on administrative tasks.

## 😓 Challenges We Encountered in Building Billify 🚧

Developing Billify was a journey, dotted with a range of challenges that pushed our technical and problem-solving skills to the limit.

### 📚 Diverse Library Integration

One of the primary hurdles we faced was the utilization of a diverse array of libraries across the full-stack platform. Ensuring compatibility and seamless integration between various technologies within the MERN stack was a complex task. Each library had its unique intricacies and learning curves, which required us to delve deep into understanding and efficiently utilizing them to their fullest potential.

### 🌐 Web Scraping Complexity

Another significant challenge was related to web scraping and the acquisition of relevant data. Finding, extracting, and processing the data necessary for Billify's billing recommendations involved navigating through a plethora of websites, each with its unique structure and content format. This task was not only time-consuming but also required constant adaptation of our web scraping strategies to ensure we were capturing the most accurate and up-to-date information.

We also wanted the ability to highlight certain medical terms within the notes and overlay them with tooltips containing short descriptions or relevant billing information. This required a delicate balance of technical prowess and creative problem-solving to ensure that the user interface remained intuitive and efficient, without compromising on functionality.

### 🚫 Merriam-Webster API Setback

Lastly, we encountered a specific challenge with the Merriam-Webster API. Our initial plan was to use this API for quick medical definitions, but we ran into various issues, including response limitations and integration difficulties, which led us to abandon this approach. This setback required us to rethink and seek alternative solutions for providing concise medical terminologies.

Through these challenges, our team not only grew in technical expertise but also in our ability to adapt and overcome unexpected obstacles. Each challenge brought with it a valuable lesson, contributing significantly to the development and eventual success of Billify.

## 🌟 Proud Accomplishments of Billify 🏆

Building Billify has been a journey filled with significant achievements that we take immense pride in. Our team’s dedication and innovative approach have led to several notable successes.

### 🎯 Accuracy in Performance
One of the key aspects we're particularly proud of is the accuracy Billify demonstrates. In a field where precision is paramount, ensuring that our tool correctly interprets and processes medical notes into billing forms was crucial. This accuracy not only enhances the tool's reliability but also boosts the confidence of its users.

### 💼 Impact on Billing Process
Another major accomplishment is the tangible impact Billify has had on simplifying the billing process. By automating the conversion of notes into billing forms, we have significantly reduced the administrative workload for healthcare professionals. This efficiency is a core achievement that resonates with the initial vision of our project.

### 👨‍⚕️ Positive Feedback from Doctors
Perhaps the most gratifying accomplishment has been the positive reception from doctors. Seeing the real-world application of Billify and hearing that it has made doctors happier and their work easier is incredibly rewarding. Their satisfaction confirms that our tool genuinely contributes to improving the day-to-day operations in healthcare settings.

We believe Billify is not just a tool, but a step forward in enhancing healthcare productivity, and we are excited about its potential to make a lasting positive impact in the medical community.

## 🚀 What's Next for Billify? 🌟

As we look forward to the future of Billify, we are excited about the roadmap we have laid out to enhance its capabilities and impact further.

### 🎨 Enhancing the User Interface
Our immediate focus is on creating a better, more intuitive user interface. We believe that a seamless and user-friendly UI is crucial for Billify to be more accessible and effective for doctors and medical staff. Enhancing the UI will make navigation simpler, information more accessible, and the overall experience more pleasant for users.

### 📊 Training on Better Data
Another key area of development is the use and training of our system on better, more comprehensive data sets. By doing so, we aim to improve the accuracy and reliability of the results Billify produces. Advanced data training will enable Billify to provide more precise billing codes, medical terminology descriptions, and overall, a more robust assistance to the healthcare professionals.

### 💊 Integrating a Drug API
We are also planning to partner with a drug API that can offer extensive information on medications, including potential harmful interactions. This integration will make Billify not just a tool for administrative tasks but also a source of critical medical information, aiding doctors in making better-informed decisions regarding patient care. Specifically, we're looking to leverage the Google Health Natural Language Processing API more effectively.

The journey ahead for Billify is filled with exciting opportunities and challenges. We are committed to continuously improving and expanding its features to make a significant and positive impact in the healthcare sector.