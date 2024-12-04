If you come to an online shopping website and you're looking at a specific item, say maybe a specific book, the website may show you things like, "Here are some other books similar to this one" or if you're browsing a specific movie, it may say, "Here are some other movies similar to this one." How do the websites do that?, so that when you're looking at one item, it gives you other similar or related items to consider. It turns out the collaborative filtering algorithm that we've been talking about gives you a nice way to find related items. Let's take a look. As part of the collaborative filtering we've discussed, you learned features x^(i) for every item i, for every movie i or other type of item they're recommending to users. Whereas early this week, I had used a hypothetical example of the features representing how much a movie is a romance movie versus an action movie. In practice, when you use this algorithm to learn the features x^(i) automatically, looking at the individual features x_1, x_2, x_3, you find them to be quite hard to interpret. Is quite hard to learn features and say, x_1 is an action movie and x_2 is as a foreign film and so on. But nonetheless, these learned features, collectively x_1, x_2, x_3, other many features, and you have collectively these features do convey something about what that movie is like. It turns out that given features x^(i) of item i, if you want to find other items, say other movies related to movie i, then what you can do is try to find the item k with features x^(k) that is similar to x^(i). In particular, given a feature vector x^(k), the way we determine what are known as similar to the feature x^(i) is as follows: is the sum from l equals 1 through n with n features of x^(k)_l minus x^(i)_l square. This turns out to be the squared distance between x^(k) and x^(i) and in math, this squared distance between these two vectors, x^(k) and x^(i), is sometimes written as follows as well. If you find not just the one movie with the smallest distance between x^(k) and x^(i) but find say, the five or 10 items with the most similar feature vectors, then you end up finding five or 10 related items to the item x^(i). If you're building a website and want to help users find related products to a specific product they are looking at, this would be a nice way to do so because the features x^(i) give a sense of what item i is about, other items x^(k) with similar features will turn out to be similar to item i. It turns out later this week, this idea of finding related items will be a small building blocks that we'll use to get to an even more powerful recommended system as well. Before wrapping up this section, I want to mention a few limitations of collaborative filtering. In collaborative filtering, you have a set of items and so the users and the users have rated some subset of items. One of this weaknesses is that is not very good at the cold start problem. For example, if there's a new item in your catalog, say someone's just published a new movie and hardly anyone has rated that movie yet, how do you rank the new item if very few users have rated it before? Similarly, for new users that have rated only a few items, how can we make sure we show them something reasonable? We could see in an earlier video, how mean normalization can help with this and it does help a lot. But perhaps even better ways to show users that rated very few items, things that are likely to interest them. This is called the cold start problem, because when you have a new item, there are few users have rated, or we have a new user that's rated very few items, the results of collaborative filtering for that item or for that user may not be very accurate. The second limitation of collaborative filtering is it doesn't give you a natural way to use side information or additional information about items or users. For example, for a given movie in your catalog, you might know what is the genre of the movie, who had a movie stars, whether it is a studio, what is the budget, and so on. You may have a lot of features about a given movie. For a single user, you may know something about their demographics, such as their age, gender, location. They express preferences, such as if they tell you they like certain movies genres but not other movies genres, or it turns out if you know the user's IP address, that can tell you a lot about a user's location, and knowing the user's location might also help you guess what might the user be interested in, or if you know whether the user is accessing your site on a mobile or on a desktop, or if you know what web browser they're using. It turns out all of these are little cues you can get. They can be surprisingly correlated with the preferences of a user. It turns out by the way, that it is known that users, that use the Chrome versus Firefox versus Safari versus the Microsoft Edge browser, they actually behave in very different ways. Even knowing the user web browser can give you a hint when you have collected enough data of what this particular user may like. Even though collaborative filtering, we have multiple users give you ratings of multiple items, is a very powerful set of algorithms, it also has some limitations. In the next video, let's go on to develop content-based filtering algorithms, which can address a lot of these limitations. Content-based filtering algorithms are a state of the art technique used in many commercial applications today. Let's go take a look at how they work.