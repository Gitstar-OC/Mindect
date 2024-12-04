I'd like to share with you some practical tips for developing an anomaly detection system. One of the key ideas will be that if you can have a way to evaluate a system, even as it's being developed, you'll be able to make decisions and change the system and improve it much more quickly. Let's take a look at what that means. When you are developing a learning algorithm, say choosing different features or trying different values of the parameters like epsilon, making decisions about whether or not to change a feature in a certain way or to increase or decrease epsilon or other parameters, making those decisions is much easier if you have a way of evaluating the learning algorithm. This is sometimes called real number evaluation, meaning that if you can quickly change the algorithm in some way, such as change a feature or change a parameter and have a way of computing a number that tells you if the algorithm got better or worse, then it makes it much easier to decide whether or not to stick with that change to the algorithm. This is how it's often done in anomaly detection. Which is, even though we've mainly been talking about unlabeled data, I'm going to change that assumption a bit and assume that we have some labeled data, including just a small number usually of previously observed anomalies. Maybe after making airplane engines for a few years, you've just seen a few airplane engines that were anomalous, and for examples that you know are anomalous, I'm going to associate a label y equals 1 to indicate this anomalous, and for examples that we think are normal, I'm going to associate the label y equals 0. The training set that the anomaly detection algorithm will learn from is still this unlabeled training set of x1 through xm, and I'm going to think of all of these examples as ones that we'll just assume are normal and not anomalous, so y is equal to 0. In practice, you have a few anomalous examples where to slip into this training set, your algorithm will still usually do okay. To evaluate your algorithm, come up with a way for you to have a real number evaluation, it turns out to be very useful if you have a small number of anomalous examples so that you can create a cross validation set, which I'm going to denote x_cv^1, y_cv^1 through x_cv^mcv, y_cv^mcv. This is similar notation as you had seen in the second course of this specialization. As similarly, have a test set of some number of examples where both the cross validation and test sets hopefully includes a few anomalous examples. In other words, the cross validation and test sets will have a few examples of y equals 1, but also a lot of examples where y is equal to 0. Again, in practice, anomaly detection algorithm will work okay if there are some examples that are actually anomalous, but there were accidentally labeled with y equals 0. Let's illustrate this with the aircraft engine example. Let's say you have been manufacturing aircraft engines for years and so you've collected data from 10,000 good or normal engines, but over the years you had also collected data from 20 flawed or anomalous engines. Usually the number of anomalous engines, that is y equals 1, will be much smaller. It will not be a typical to apply this type of algorithm with anywhere from, say, 2-50 known anomalies. We're going to take this dataset and break it up into a training set, a cross validation set, and the test set. Here's one example. I'm going to put 6,000 good engines into the training set. Again, if there are couple of anomalous engines that got slipped into this set is actually okay, I wouldn't worry too much about that. Then let's put 2,000 good engines and 10 of the known anomalies into the cross-validation set, and a separate 2,000 good and 10 anomalous engines into the test set. What you can do then is train the algorithm on the training set, fit the Gaussian distributions to these 6,000 examples and then on the cross-validation set, you can see how many of the anomalous engines it correctly flags. For example, you could use the cross validation set to tune the parameter epsilon and set it higher or lower depending on whether the algorithm seems to be reliably detecting these 10 anomalies without taking too many of these 2,000 good engines and flagging them as anomalies. After you have tuned the parameter epsilon and maybe also added or subtracted or tuned to features X_J you can then take the algorithm and evaluate it on your test set to see how many of these 10 anomalous engines it finds, as well as how many mistakes it makes by flagging the good engines as anomalous ones. Notice that this is still primarily an unsupervised learning algorithm because the training sets really has no labels or they all have labels that we're assuming to be y equals 0 and so we learned from the training set by fitting the Gaussian distributions as you saw in the previous video. But it turns out if you're building a practical anomaly detection system, having a small number of anomalies to use to evaluate the algorithm that your cross validation and test sets is very helpful for tuning the algorithm. Because the number of flawed engines is so small there's one other alternative that I often see people use for anomaly detection, which is to not use a test set, like to have just a training set and a cross-validation set. In this example, you will set train on 6,000 good engines, but take the remainder of the data, the 4,000 remaining good engines as well as all the anomalies, and put them in the cross validation set. You would then tune the parameters Epsilon and add or subtract features x_j to try to get it to do as well as possible as evaluated on the cross validation set. If you have very few flawed engines, so if you had only two flawed engines, then this really makes sense to put all of that in the cross validation set. You just don't have enough data to create a totally separate test set that is distinct from your cross-validation set. The downside of this alternative here is that after you've tuned your algorithm, you don't have a fair way to tell how well this will actually do on future examples because you don't have the test set. But when your dataset is small, especially when the number of anomalies you have, your dataset is small, this might be the best alternative you have. I see this done quite often as well when you just don't have enough data to create a separate test set. If this is the case, just be aware that there's a higher risk that you will have over-fit some of your decisions around Epsilon and choice of features and so on to the cross-validation set and so its performance on real data in the future may not be as good as you were expecting. Now, let's take a closer look at how to actually evaluate the algorithm on your cross-validation sets or on the test set. Here's what you'd do. You would first fit the model p of x on the training set. This was a 6,000 examples of goods engines. Then on any cross validation or test example x, you would compute p of x and you will predict y equals 1. That is anomalous if p of x is less than Epsilon and you predict y is 0, if p of x is greater than or equal to Epsilon. Based on this, you can now look at how accurately this algorithm's predictions on the cross validation or test set matches the labels, y you have in the cross validation or the test sets. In the third week of the second course, we had had a couple of optional videos on how to handle highly skewed data distributions where the number of positive examples, y equals 1, can be much smaller than the number of negative examples where y equals 0. This is the case as well for many anomaly detection in the applications where the number of anomalies in your cross-validation set is much smaller. In our previous example, we had maybe 10 positive examples and 2,000 negative examples because we had 10 anomalies and 2,000 normal examples. If you saw those optional videos, you may recall that we saw it can be useful to compute things like the true positive, false positive, false negative, and true negative rates. Also compute precision recall or F_1 score and that these are alternative metrics and classification accuracy that could work better when your data distribution is very skewed. If you saw that video, you might consider applying those types of evaluation metrics as well to tell how well your learning algorithm is doing at finding that small handful of anomalies or positive examples amidst this much larger set of negative examples of normal plane engines. If you didn't watch that video, don't worry about it. It's okay. The intuition I hope you get is to use the cross-validation set to just look at how many anomalies is finding and also how many normal engines is incorrectly flagging as an anomaly. Then to just use that to try to choose a good choice for the parameter Epsilon. You find that the practical process of building an anomaly detection system is much easier if you actually have just a small number of labeled examples of known anomalies. Now, this does raise the question, if you have a few labeled examples, since you'll still be using an unsupervised learning algorithm, why not take those labeled examples and use a supervised learning algorithm instead? In the next video, let's take a look at a comparison between anomaly detection and supervised learning and when you might prefer one over the other. Let's go on to the next video.