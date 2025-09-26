import "./OutletCSS.scss";

export default function TimelineComponent() {
  const timelineData = [
    {
      year: "2010 - 2014",
      title: "High School - Technical School Nr 9",
      location: "Loretanska, Krakow",
      description: "Studied as an Electronics Technician",
      type: "education",
    },
    {
      year: "2013",
      title: "Internship - TVP Krakow",
      location: "Krakow",
      description: "Completed internship during high school",
      type: "internship",
    },
    {
      year: "2015 - 2016",
      title: "University Studies",
      location: "UEK Krakow",
      description: "1 year of Applied Computer Science",
      type: "education",
    },
    {
      year: "2016 - 2018",
      title: "Driver at JetTrans",
      location: "Krakow",
      description: "Worked as a company driver",
      type: "job",
    },
    {
      year: "2018 - 2021",
      title: "Employee at Hollex",
      location: "Krakow",
      description: "Worked as journalist",
      type: "job",
    },
    {
      year: "2021",
      title: "Moved to Germany",
      location: "Germany",
      description: "Started living and working abroad",
      type: "life",
    },
    {
      year: "Sep 2024 - Sep 2025",
      title: "Fullstack Developer Course (React)",
      location: "DCI Berlin",
      description: "Started fullstack React developer course",
      type: "education",
    },
    {
      year: "Sep 2025 - Nov 2025",
      title: "Internship - DCI Berlin",
      location: "Berlin",
      description: "Completed internship as part of the course",
      type: "internship",
    },
  ];

  const TimelineItem = ({ item }) => (
    <div className="timeline-item-horizontal">
      <div className={`timeline-dot ${item.type}`}></div>
      <div className="timeline-content-horizontal">
        <span className="timeline-year">{item.year}</span>
        <h3>{item.title}</h3>
        <h4>{item.location}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="timeline-container-horizontal">
      <h1>🕒 My Timeline</h1>
      <div className="timeline-horizontal">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
