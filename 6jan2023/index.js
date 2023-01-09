const tagsList = document.querySelector(".tags-list");
const recentList = document.querySelector(".recent-list");

const tags = [
  "Blender",
  "Browser",
  "cross-platform",
  "HoloLens",
  "Microsoft",
  "Mixed Reality",
  "modeling",
  "MR",
  "nodejs",
  "streamsocket",
  "unity",
  "unity3D",
  "unreal engine",
  "VR",
  "websockets",
];

const recentPosts = [
  "Azure Speech Studio for Mixed Reality",
  "HoloLens 2 Unreal Project Template",
  "Simplygon in Azure",
  "Blender in Azure",
  "AAD Login on HoloLens 2",
];

const populateList = (list, type, parent) => {
  list.map((item) => {
    const li = document.createElement("li");

    if (type === "buttons") {
      const tagBtn = document.createElement("button");
      tagBtn.classList.add("tag-btn");
      tagBtn.textContent = item;
      li.appendChild(tagBtn);
      parent.appendChild(li);
    } else if (type === "links") {
      const recentLink = document.createElement("a");
      recentLink.textContent = item;
      recentLink.href = "/";
      li.appendChild(recentLink);
      parent.appendChild(li);
    }
  });
};

const populateSearchList = () => {
  const dataListData = [...tags, ...recentPosts];
  const dataList = document.querySelector("#search-terms");

  dataListData.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    dataList.appendChild(option);
  });
};

const handleSelectTag = (e) => {
  const tag = e.target;

  if (tag.classList.contains("tag-btn")) {
    tag.classList.toggle("tag-active");
  }
};

populateList(tags, "buttons", tagsList);
populateList(recentPosts, "links", recentList);
populateSearchList();

tagsList.addEventListener("click", handleSelectTag);
