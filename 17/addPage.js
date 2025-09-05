import * as components from "./components.js";

export default function createHomePage() {
  components.getTitleEl("Добавить запись");
  components.getFormEl();
  components.getInputNameEl();
  components.getInputPlaceEl();
  components.getInputWeightEl();
  components.getInputDateEl();
  components.getButtonAddEl();
}
