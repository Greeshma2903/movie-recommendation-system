import numpy as np
import pandas as pd
import difflib
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

movies_data = pd.read_csv('movies.csv')
# print(movies_data)
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']
# print(selected_features)

# replacing null values with null string
for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')

# combining all the 5 selected features
combined_features = movies_data['genres']+' '+movies_data['keywords']+' ' + \
    movies_data['tagline']+' '+movies_data['cast']+' '+movies_data['director']
# print(combined_features)

# converting the text data to feature vectors
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)

# getting the similarity scores using cosine similarity
similarity = cosine_similarity(feature_vectors)
# print(similarity)

# movie_name = input(' Enter your favourite movie name : ')
# list_of_all_titles = movies_data['title'].tolist()
# find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)
# close_match = find_close_match[0]

# index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]
# print(index_of_the_movie)
# similarity_score = list(enumerate(similarity[index_of_the_movie]))
# sorted_similar_movies = sorted(similarity_score, key = lambda x:x[1], reverse = True)

# movie_name = input(' Enter your favourite movie name : ')

try:
    movie_name = str(sys.argv[1])
    list_of_all_titles = movies_data['title'].tolist()

    find_close_match = difflib.get_close_matches(
        movie_name, list_of_all_titles)

    close_match = find_close_match[0]

    index_of_the_movie = movies_data[movies_data.title ==
                                     close_match]['index'].values[0]

    similarity_score = list(enumerate(similarity[index_of_the_movie]))

    sorted_similar_movies = sorted(
        similarity_score, key=lambda x: x[1], reverse=True)

    # print('Movies suggested for you : \n')

    # i = 1

    # for movie in sorted_similar_movies:
    #   index = movie[0]
    #   title_from_index = movies_data[movies_data.index==index]['title'].values[0]
    #   if (i<11):
    #     print(i, '.',title_from_index)
    #     i+=1

    title_from_index = []
    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index.append(
            movies_data[movies_data.index == index]['title'].values[0])

    top_15_titles = []
    for i in range(15):
        top_15_titles.append((title_from_index[i]))

    print(json.dumps(top_15_titles))

except:
    print(json.dumps({"error": "Err! Movie not in our database."}))
# sorted_data=movies_data.sort_values(ascending=False,by =['popularity'])
# newdata=sorted_data.head(20)
# homepage_sorted=newdata['title'].tolist()
# for i in range(20):
#   print(i+1,'.',homepage_sorted[i])
