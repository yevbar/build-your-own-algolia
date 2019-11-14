Qestion 1:

Let's say you have a website where you sell shoes. When a potential customer visits your website, they need some way to actually find shoes they like; they might be interested in the _color_ of a pair or maybe the _brand_ of the company behind them. With all the ways you can characterize shoes, these features (like color or brand) are **attributes** of some pair of shoes. When you gather your shoes to be put into a search tool, each pair of shoes (with its collection of attributes) is a single **record**.

Now, as your potential customer is searching through the different shoe records, that data had to have been put somewhere to be searched through in the first place. You may dump the records into a database somewhere but, in order to make it proficiently searchable, it needs to go through a process of **indexing**. The process of indexing a collection of records will vary depending on the data you're dealing with; Google doesn't index web pages the same way Netflix indexes their movies. It may seem like indexing is just magic jargon for putting a database on a pedastal but, really, the reason Algolia is able to deliver search results very quickly is by preparing the data beforehand and indexing records.

At this point, your potential customer is able to look through your shoes and is able to search with color and brand. You could leave it at that and let your website's visitors have fun with it but, you're likely to have a limited number of shoes in stock or you may have certain targeting on someone visiting your site (ie this person's visited your site before looking at very expensive shoes so they may be interested in shoes in a higher price range). With these in consideration as well as other details about the users or your supply, it would be highly desirable to order the search results in a specific fashion. If you're looking to clear out a set of shoes, you may want those items at the top of the search results; if you're interested in retaining users, you may have more relevant search results closer to the top. This process of customizing the order in which results are served to the user is what you would do in our **Custom Ranking**.

Question 2:

While it is certainly accomplishable to do add/remove records by hand and clicking through, you'll find it a lot more effective to be fueling your iteration process with our API. In just a few lines of your preferred programming language, you can easily [create](https://www.algolia.com/doc/api-client/methods/indexing/#creating-indices) and [remove](https://www.algolia.com/doc/api-reference/api-methods/delete-index/) indices as well as modify the [objects](https://www.algolia.com/doc/api-reference/api-methods/add-objects/#examples) in them.

Question 3:

The development process for introducing Algolia into your website is a fairly straightforward one. The high level process for doing so would look like:

1) Creating an account on [Algolia](https://www.algolia.com) and creating your first index (the website features helpers along the way)
2) Uploading records into your index, there will be example datasets for you play around with however, if you already have the data you're looking to integrate into Algolia, you can upload via [our API](https://www.algolia.com/doc/api-reference/api-methods/add-objects/#examples)
3) Use our [InstantSearch](https://www.algolia.com/products/instantsearch/) product in your website; we have libraries for numerous of the most used frameworks and also offer a [vanilla JavaScript](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/) library as well
4) Configuring and customizing your InstantSearch to your liking

The area that will involve the most development work will be tweaking the InstantSearch component to your liking however we have elaborate documentation as well as public [examples](https://github.com/algolia/instantsearch.js/tree/develop/examples) and, once your InstantSearch is hooked up to your index, it's functionally complete. If you have any further questions about specific implementation, we can also help you with that
