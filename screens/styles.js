import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edede9",
    height: "100%",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edede9",
  },
  text: {
    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  orderName: {
    fontSize: 18,
    height: 40,
  },
  wrappper: {
    marginBottom: 10,
  },
  detailsTitle: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 3,
  },
  detailsInput: {
    fontSize: 17,
  },
  detailsContainer: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#edede9",
  },
  wrapper_single: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    height: 40,
  },
  filterInput: {
    borderTopWidth: 1,
    borderTopColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: "5%",
    width: "40%",
  },
});
