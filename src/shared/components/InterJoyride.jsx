import { useState, useEffect } from "react";
import Joyride from "react-joyride";

export default function InterJoyride() {
  const [run, setRun] = useState(false); 
  const steps = [
    {
      target: ".my-first-step",
      content: "This is the first step!",
    },
    {
      target: ".my-second-step",
      content: "Here is another important feature.",
    },
    {
      target: ".my-third-step",
      content: "Finally, check this out!",
    },
  ];

  // Check if the tour has already run in this browser
  useEffect(() => {
    const hasRunTour = localStorage.getItem("hasRunTour");
    if (!hasRunTour) {
      setRun(true); // Start the tour if it hasn't run before
    }
  }, []);

  // Handle tour completion by setting the flag in localStorage
  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = ["finished", "skipped"];

    if (finishedStatuses.includes(status)) {
      localStorage.setItem("hasRunTour", "true"); // Save the flag
      setRun(false); // Stop the tour
    }
  };

  return (
    <div className="app">
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={false}
        spotlightClicks={true}
        callback={handleJoyrideCallback} // Trigger when tour finishes
      />
      <h1 className="my-first-step">Welcome to My App!</h1>
      <p className="my-second-step">Heres a cool feature.</p>
      <button className="my-third-step">Get Started</button>
    </div>
  );
}
