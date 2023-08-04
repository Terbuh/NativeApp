import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  addClient: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
    justifyContent: "space-evenly",
  },
  text: {
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
    fontSize: 20,
  },
  searchClient: {
    width: "100%",
    alignItems: "center",
  },
  detailsTitle: {
    fontSize: 17,
   
    padding: 3,
  },
  detailsInput: {
    fontSize: 17,
  },

  filterInput: {
    borderTopWidth: 1,
    borderTopColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  listWrapper: {
    width: "100%",
    flex: 1,
  },
  detailsButton: {
    alignItems: "center",
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#A64253",
    fontSize: 20,
  },
  flatList: {
    width: "100%",
    alignItems: "center",
  },
});
