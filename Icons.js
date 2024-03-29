import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { Image } from "react-native";
import colors from "./Colors";

// This is a helper file to convert svg to JSX fragment so that they are able to be used better with the project
// NOT WORKING CURRENTLY, LEAVING HERE FOR REFERENCE

const Calendar = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M19 2h-1V1a1 1 0 00-2 0v1H8V1a1 1 0 00-2 0v1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V7a5.006 5.006 0 00-5-5zM2 7a3 3 0 013-3h14a3 3 0 013 3v1H2zm17 15H5a3 3 0 01-3-3v-9h20v9a3 3 0 01-3 3z"></Path>
      <Circle cx="12" cy="15" r="1.5"></Circle>
      <Circle cx="7" cy="15" r="1.5"></Circle>
      <Circle cx="17" cy="15" r="1.5"></Circle>
    </Svg>
  );
};

const Cloud = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M3 21.123a1 1 0 01-.567-.177 5.37 5.37 0 01.51-9.3 7.648 7.648 0 01-.8-5.179 8 8 0 0115.49-.841 1.085 1.085 0 00.722.733 7.982 7.982 0 015.312 5.354 1 1 0 01-1.916.572 5.988 5.988 0 00-3.983-4.014 3.1 3.1 0 01-2.044-2.051 6 6 0 10-11.06 4.512 1.994 1.994 0 01-.792 2.687 3.37 3.37 0 00-.3 5.881A1 1 0 013 21.123zM19.1 24a5.322 5.322 0 001.062-.158 4.946 4.946 0 003.7-3.7 5.012 5.012 0 00-3.557-6s-.629-.145-.766-.471a6 6 0 00-11.367.856 6.38 6.38 0 00-.057 2.732 3.5 3.5 0 00.451 6.589A3.8 3.8 0 009.4 24zm-1.4-9.556a2.647 2.647 0 002.088 1.633 3.02 3.02 0 012.132 3.62 2.978 2.978 0 01-2.2 2.194 3.27 3.27 0 01-.655.082c-1.665.033-8.271.038-9.6 0a1.709 1.709 0 01-.379-.055A1.471 1.471 0 018.057 20.9a1.493 1.493 0 01.85-1.795 2.017 2.017 0 001.18-2.305 3.991 3.991 0 01.031-1.792 4 4 0 017.577-.562z"></Path>
    </Svg>
  );
};

const Moon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M15 24a12.021 12.021 0 01-8.914-3.966 11.9 11.9 0 01-3.02-9.309A12.122 12.122 0 0113.085.152a13.061 13.061 0 015.031.205 2.5 2.5 0 011.108 4.226c-4.56 4.166-4.164 10.644.807 14.41a2.5 2.5 0 01-.7 4.32A13.894 13.894 0 0115 24zm.076-22a10.793 10.793 0 00-1.677.127 10.093 10.093 0 00-8.344 8.8A9.927 9.927 0 007.572 18.7a10.476 10.476 0 0011.092 2.73.5.5 0 00.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459 0 00.128-.466.49.49 0 00-.356-.361A10.657 10.657 0 0015.076 2z"></Path>
    </Svg>
  );
};

const MagnifyingGlass = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M14 0C6.664-.19 1.6 8.253 5.139 14.619l-4.261 4.26a3 3 0 104.243 4.243l4.26-4.261C15.748 22.4 24.189 17.336 24 10A10.013 10.013 0 0014 0zM3.707 21.708a1 1 0 01-1.415-1.414l3.969-3.97a10.12 10.12 0 001.415 1.415zM14 18a8.009 8.009 0 01-8-8C6.375-.589 21.626-.586 22 10a8.01 8.01 0 01-8 8zm6-8c-.251 7.93-11.75 7.928-12 0a6.007 6.007 0 016-6 1 1 0 010 2 4 4 0 00-4 4c.138 5.275 7.863 5.274 8 0a1 1 0 012 0z"></Path>
    </Svg>
  );
};

const Raindrops = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M13 24a6.006 6.006 0 01-6-6c0-1.56 1.2-4.045 3.552-7.388a3.016 3.016 0 014.9 0C17.805 13.955 19 16.44 19 18a6.006 6.006 0 01-6 6zm0-12.657a.98.98 0 00-.813.422C9.311 15.844 9 17.484 9 18a4 4 0 008 0c0-.516-.311-2.156-3.187-6.235a.98.98 0 00-.813-.422zM5 11a5.006 5.006 0 01-5-5c0-1.26.842-2.855 2.574-4.877a3.2 3.2 0 014.852 0C9.158 3.143 10 4.738 10 6a5.006 5.006 0 01-5 5zm0-9a1.173 1.173 0 00-.906.421C2.151 4.689 2 5.732 2 6a3 3 0 006 0c0-.266-.151-1.309-2.094-3.576A1.171 1.171 0 005 2zM19.5 9.964a4.505 4.505 0 01-4.5-4.5c0-1.091.7-2.506 2.146-4.326a3.02 3.02 0 014.708 0C23.3 2.958 24 4.373 24 5.464a4.505 4.505 0 01-4.5 4.5zM19.5 2a1 1 0 00-.787.381C17.123 4.385 17 5.247 17 5.464a2.5 2.5 0 005 0c0-.217-.123-1.079-1.713-3.082A1 1 0 0019.5 2z"></Path>
    </Svg>
  );
};

const Settings = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M12 8a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z"></Path>
      <Path d="M21.294 13.9l-.444-.256a9.1 9.1 0 000-3.29l.444-.256a3 3 0 10-3-5.2l-.445.257A8.977 8.977 0 0015 3.513V3a3 3 0 00-6 0v.513a8.977 8.977 0 00-2.848 1.646L5.705 4.9a3 3 0 00-3 5.2l.444.256a9.1 9.1 0 000 3.29l-.444.256a3 3 0 103 5.2l.445-.257A8.977 8.977 0 009 20.487V21a3 3 0 006 0v-.513a8.977 8.977 0 002.848-1.646l.447.258a3 3 0 003-5.2zm-2.548-3.776a7.048 7.048 0 010 3.75 1 1 0 00.464 1.133l1.084.626a1 1 0 01-1 1.733l-1.086-.628a1 1 0 00-1.215.165 6.984 6.984 0 01-3.243 1.875 1 1 0 00-.751.969V21a1 1 0 01-2 0v-1.252a1 1 0 00-.751-.969A6.984 6.984 0 017.006 16.9a1 1 0 00-1.215-.165l-1.084.627a1 1 0 11-1-1.732l1.084-.626a1 1 0 00.464-1.133 7.048 7.048 0 010-3.75 1 1 0 00-.465-1.129l-1.084-.626a1 1 0 011-1.733l1.086.628A1 1 0 007.006 7.1a6.984 6.984 0 013.243-1.875A1 1 0 0011 4.252V3a1 1 0 012 0v1.252a1 1 0 00.751.969A6.984 6.984 0 0116.994 7.1a1 1 0 001.215.165l1.084-.627a1 1 0 111 1.732l-1.084.626a1 1 0 00-.463 1.129z"></Path>
    </Svg>
  );
};

const Snowflake = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M22.761 13.971l-2.445.646a2.707 2.707 0 00-.981.492l-2.617-1.522a4.7 4.7 0 000-3.174l2.617-1.522a2.707 2.707 0 00.981.492s2.617.679 2.7.679a1 1 0 00.256-1.962l-2.444-.647a.715.715 0 01-.508-.873l.647-2.444a1 1 0 10-1.934-.512l-.646 2.444a2.687 2.687 0 00-.058 1.1l-2.616 1.516A4.978 4.978 0 0013 7.1v-3a2.677 2.677 0 00.919-.6l1.788-1.788A1 1 0 0014.293.293l-1.788 1.788a.718.718 0 01-1.01 0L9.707.293a1 1 0 00-1.414 1.414L10.081 3.5a2.677 2.677 0 00.919.6v3a4.978 4.978 0 00-2.713 1.584L5.671 7.162a2.687 2.687 0 00-.058-1.1L4.967 3.62a1 1 0 10-1.934.512l.647 2.444a.715.715 0 01-.508.873L.728 8.1a1 1 0 00.254 1.966c.085 0 2.7-.679 2.7-.679a2.707 2.707 0 00.981-.492l2.617 1.522a4.7 4.7 0 000 3.174l-2.615 1.518a2.707 2.707 0 00-.981-.492l-2.445-.646A1 1 0 00.728 15.9l2.444.647a.715.715 0 01.508.873l-.647 2.444a1 1 0 101.934.512l.646-2.444a2.687 2.687 0 00.058-1.1l2.616-1.522A4.978 4.978 0 0011 16.9v3a2.691 2.691 0 00-.919.6l-1.788 1.793a1 1 0 001.414 1.414l1.793-1.788a.718.718 0 011.01 0l1.788 1.788a1 1 0 001.414-1.414l-1.788-1.788A2.691 2.691 0 0013 19.9v-3a4.978 4.978 0 002.713-1.583l2.616 1.522a2.687 2.687 0 00.058 1.1l.646 2.444a1 1 0 001.934-.512l-.647-2.444a.715.715 0 01.508-.873l2.444-.647a1 1 0 10-.511-1.933zM12 15a3 3 0 010-6 3 3 0 010 6z"></Path>
    </Svg>
  );
};

const Sun = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M23 11h-4.08a6.924 6.924 0 00-.429-1.607l3.527-2.044a1 1 0 10-1-1.731l-3.53 2.047a7.062 7.062 0 00-1.149-1.15l2.046-3.531a1 1 0 00-1.731-1l-2.047 3.525A6.9 6.9 0 0013 5.08V1a1 1 0 00-2 0v4.08a6.9 6.9 0 00-1.607.429L7.349 1.982a1 1 0 00-1.731 1l2.046 3.533a7.062 7.062 0 00-1.149 1.15l-3.53-2.047a1 1 0 10-1 1.731l3.524 2.044A6.924 6.924 0 005.08 11H1a1 1 0 000 2h4.08a6.924 6.924 0 00.429 1.607l-3.527 2.044a1 1 0 101 1.731l3.53-2.047a7.062 7.062 0 001.149 1.15l-2.043 3.531a1 1 0 001.731 1l2.044-3.527A6.947 6.947 0 0011 18.92V23a1 1 0 002 0v-4.08a6.947 6.947 0 001.607-.429l2.044 3.527a1 1 0 001.731-1l-2.046-3.531a7.062 7.062 0 001.149-1.15l3.53 2.047a1 1 0 101-1.731l-3.527-2.044A6.924 6.924 0 0018.92 13H23a1 1 0 000-2zm-11 6c-6.608-.21-6.606-9.791 0-10 6.608.21 6.606 9.791 0 10z"></Path>
    </Svg>
  );
};

const ThermometerHalf = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M13 14.184V8a1 1 0 00-2 0v6.184a2.994 2.994 0 102 0zm4-2.073V5c-.211-6.609-9.791-6.6-10 0v7.111a7 7 0 1010 0zM12 22a5.018 5.018 0 01-3.332-8.719A1 1 0 009 12.537V5a3 3 0 016 0v7.537a1 1 0 00.332.744A5.018 5.018 0 0112 22z"></Path>
    </Svg>
  );
};

const Time24 = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M14.6 21.3c-.3.226-.619.464-.89.7H16a1 1 0 010 2h-4a1 1 0 01-1-1c0-1.5 1.275-2.456 2.4-3.3.75-.562 1.6-1.2 1.6-1.7a1 1 0 00-2 0 1 1 0 01-2 0 3 3 0 016 0c0 1.5-1.275 2.456-2.4 3.3zM23 15a1 1 0 00-1 1v3h-1a1 1 0 01-1-1v-2a1 1 0 00-2 0v2a3 3 0 003 3h1v2a1 1 0 002 0v-7a1 1 0 00-1-1zm-10-3V7a1 1 0 00-2 0v4H8a1 1 0 000 2h4a1 1 0 001-1zM23 2a1 1 0 00-1 1v2.374A12 12 0 107.636 23.182 1.015 1.015 0 008 23.25a1 1 0 00.364-1.932A10 10 0 1120.636 7H18a1 1 0 000 2h3a3 3 0 003-3V3a1 1 0 00-1-1z"></Path>
    </Svg>
  );
};

const Umbrella = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M23.717 9.549A12.834 12.834 0 0013 2.043V1a1 1 0 00-2 0v1.043A12.843 12.843 0 00.267 9.549a3.945 3.945 0 00.405 3.682A4.015 4.015 0 004 15h7v6a1 1 0 01-2 0 1 1 0 00-2 0 3 3 0 006 0v-6h6.983a4.017 4.017 0 003.329-1.769 3.948 3.948 0 00.405-3.682zm-2.061 2.561a1.993 1.993 0 01-1.673.89H4a1.992 1.992 0 01-1.673-.891 1.927 1.927 0 01-.2-1.818C3.581 6.646 7.734 4 12 4a10.809 10.809 0 019.859 6.291 1.923 1.923 0 01-.203 1.819z"></Path>
    </Svg>
  );
};

const Wind = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <Path d="M0 12a1 1 0 011-1h6a1 1 0 010 2H1a1 1 0 01-1-1zm20.886-.893A4.99 4.99 0 1012 8a1 1 0 002 0 3 3 0 113 3h-6a1 1 0 000 2h9a2 2 0 012 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 00-1.886.666C17.615 20.415 23.952 19.579 24 15a4 4 0 00-3.114-3.893zM11 16H1a1 1 0 000 2h10a2 2 0 012 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 10-1.886.666C8.615 25.415 14.952 24.579 15 20a4 4 0 00-4-4zM1 8h6a4 4 0 004-4c-.048-4.581-6.387-5.414-7.943-1.333a1 1 0 001.886.666C5.72 1.351 8.991 1.663 9 4a2 2 0 01-2 2H1a1 1 0 000 2z"></Path>
    </Svg>
  );
};

const ParseConditionForIcon = (conditionString, hour) => {
  if (conditionString.indexOf("Clear") != -1) {
    return <Moon color={colors.black} size={30} />;
  } else if (
    conditionString.indexOf("rain") != -1 ||
    conditionString.indexOf("Rain") != -1 ||
    conditionString.indexOf("drizzle") != -1
  ) {
    return <Raindrops color={colors.blue} size={30} />;
  } else if (
    conditionString.indexOf("Overcast") != -1 ||
    conditionString.indexOf("Cloudy") != -1 ||
    conditionString.indexOf("Fog") != -1 ||
    conditionString.indexOf("Mist") != -1
  ) {
    return <Cloud color={colors.white} size={30} />;
  } else if (
    conditionString.indexOf("Snow") != -1 ||
    conditionString.indexOf("snow") != -1 ||
    conditionString.indexOf("sleet") != -1 ||
    conditionString.indexOf("Sleet") != -1 ||
    conditionString.indexOf("Blizzard") != -1
  ) {
    return <Snowflake color={colors.iceblue} size={30} />;
  } else if (conditionString.indexOf("Sun") != -1) {
    return <Sun color={colors.yellow} size={30} />;
  } else if (conditionString.indexOf("Partly cloudy") != -1) {
    if (hour > 19 || hour < 7) {
      return (
        <Image source={require("./assets/icons/png/partly-cloudy-night.png")} />
      );
    } else {
      return <Image source={require("./assets/icons/png/partly-cloudy.png")} />;
    }
  } else if (
    conditionString.indexOf("Wind") != -1 ||
    conditionString.indexOf("wind") != -1
  ) {
    return <Wind color={colors.white} size={30} />;
  }
};

export {
  Calendar,
  Cloud,
  Moon,
  MagnifyingGlass,
  Raindrops,
  Settings,
  Snowflake,
  Sun,
  ThermometerHalf,
  Time24,
  Umbrella,
  Wind,
  ParseConditionForIcon,
};
