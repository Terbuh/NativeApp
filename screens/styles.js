import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: "200%",
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "roboto",
    fontSize: 20,
   
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

    padding: 3,
  },
  detailsInput: {
    fontSize: 20,
    backgroundColor: "rgba(245, 228, 215, 0.2)",
    minWidth: "30%",
    maxWidth: "50%",
    color: "black",
  },
  detailsContainer: {
    height: "100%",
    alignItems: "center",
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
  detailsButton: {
    alignItems: "center",
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#A64253",
    fontSize: 20,
  },
});
