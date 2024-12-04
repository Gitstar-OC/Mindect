In this video, we'll start to develop a second type of recommender system called a content-based filtering algorithm. To get started, let's compare and contrast the collaborative filtering approach that we'll be looking at so far with this new content-based filtering approach. Let's take a look. With collaborative filtering, the general approach is that we would recommend items to you based on ratings of users who gave similar ratings as you. We have some number of users give some ratings for some items, and the algorithm figures out how to use that to recommend new items to you. In contrast, content-based filtering takes a different approach to deciding what to recommend to you. A content-based filtering algorithm will recommend items to you based on the features of users and features of the items to find a good match. In other words, it requires having some features of each user, as well as some features of each item and it uses those features to try to decide which items and users might be a good match for each other. With a content-based filtering algorithm, you still have data where users have rated some items. Well, content-based filtering will continue to use r, i, j to denote whether or not user j has rated item i and will continue to use y i, j to denote the rating that user j is given item i if it's defined. But the key to content-based filtering is that we will be able to make good use of features of the user and of the items to find better matches than potentially a pure collaborative filtering approach might be able to. Let's take a look at how this works. In the case of movie recommendations, here are some examples of features. You may know the age of the user, or you may have the gender of the user. This could be a one-hot feature similar to what you saw when we were talking about decision trees where you could have a one-hot feature with the values based on whether the user's self-identified gender is male or female or unknown, and you may know the country of the user. If there are about 200 countries in the world then also be a one-hot feature with about 200 possible values. You can also look at past behaviors of the user to construct this feature vector. For example, if you look at the top thousand movies in your catalog, you might construct a thousand features that tells you of the thousand most popular movies in the world which of these has the user watch. In fact, you can also take ratings the user might have already given in order to construct new features. It turns out that if you have a set of movies and if you know what genre each movie is in, then the average rating per genre that the user has given. Of all the romance movies that the user has rated, what was the average rating? Of all the action movies that the user has rated, what was the average rating? And so on for all the other genres. This too can be a powerful feature to describe the user. One interesting thing about this feature is that it actually depends on the ratings that the user had given. But there's nothing wrong with that. Constructing a feature vector that depends on the user's ratings is a completely fine way to develop a feature vector to describe that user. With features like these you can then come up with a feature vector x subscript u, use as a user superscript j for user j. Similarly, you can also come up with a set of features for each movie of each item, such as what was the year of the movie? What's the genre or genres of the movie of known? If there are critic reviews of the movie, you can construct one or multiple features to capture something about what the critics are saying about the movie. Or once again, you can actually take user ratings of the movie to construct a feature of, say, the average rating of this movie. This feature again depends on the ratings that users are given but again, does nothing wrong with that. You can construct a feature for a given movie that depends on the ratings that movie had received, such as the average rating of the movie. Or if you wish, you can also have average rating per country or average rating per user demographic as they want to construct other types of features of the movies as well. With this, for each movie, you can then construct a feature vector, which I'm going to denote x subscript m, m stands for movie, and superscript i for movie i. Given features like this, the task is to try to figure out whether a given movie i is going to be good match for user j. Notice that the user features and movie features can be very different in size. For example, maybe the user features could be 1500 numbers and the movie features could be just 50 numbers. That's okay too. In content-based filtering, we're going to develop an algorithm that learns to match users and movies. Previously, we were predicting the rating of user j on movie i as wj dot products of xi plus bj. In order to develop content-based filtering, I'm going to get rid of bj. It turns out this won't hurt the performance of the content-based filtering at all. Instead of writing wj for a user j and xi for a movie i, I'm instead going to just replace this notation with vj_u. This v here stands for a vector. There'll be a list of numbers computed for user j and the u subscript here stands for user. Instead of xi, I'm going to compute a separate vector subscript m, to stand for the movie and for movie is what a superscript stands for. Vj_u as a vector as a list of numbers computed from the features of user j and vi_m is a list of numbers computed from the features like the ones you saw on the previous slide of movie i. If we're able to come up with an appropriate choice of these vectors, vj_u and vi_m, then hopefully the dot product between these two vectors will be a good prediction of the rating that user j gives movie i. Just illustrate what a learning algorithm could come up with. If v, u, that is a user vector, turns out to capture the user's preferences, say is 4.9, 0.1, and so on. Lists of numbers like that. The first number captures how much do they like romance movies. Then the second number captures how much do they like action movies and so on. Then v_m, the movie vector is 4.5, 0.2, and so on and so forth of these numbers capturing how much is this a romance movie, how much is this an action movie, and so on. Then the dot product, which multiplies these lists of numbers element-wise and then takes a sum, hopefully, will give a sense of how much this particular user will like this particular movie. The challenges given features of a user, say xj_u, how can we compute this vector vj_u that represents succinctly or compactly the user's preferences? Similarly given features of a movie, how can we compute vi_m? Notice that whereas x_u and x_m could be different in size, one could be very long lists of numbers, one could be much shorter list, v here have to be the same size. Because if you want to take a dot product between v_u and v_m, then both of them have to have the same dimensions such as maybe both of these are say 32 numbers. To summarize, in collaborative filtering, we had number of users give ratings of different items. In contrast, in content-based filtering, we have features of users and features of items and we want to find a way to find good matches between the users and the items. The way we're going to do so is to compute these vectors, v_u for the users and v_m for the items over the movies, and then take dot products between them to try to find good matches. How do we compute the v_u and v_m? Let's take a look at that in the next video.