import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CommentInput from "../components/CommentInput.js";
import CommentItem from "../components/CommentItem";

export function CommentScreen({ route, navigation }) {
  
  const [comment, setComment] = useState([]);

  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      { id: Math.random().toString(), value: commentTitle },
    ]);
  };

  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.gameCommentsJubotron}>
        <CommentInput onAddComment={addCommentHandler} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={comment}
          renderItem={(itemData) => (
            <CommentItem
              id={itemData.item.id}
              onDelete={removeCommentHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
 
  gameCommentsJubotron: {
    flex: 1,
  },
});