initSidebarItems({"mod":[["account_budget",""],["account_budget_proposal",""],["account_link",""],["ad",""],["ad_group_bid_modifier",""],["ad_group_criterion",""],["ad_group_criterion_simulation",""],["ad_group_simulation",""],["asset",""],["attribute_field_mapping",""],["batch_job",""],["bidding_strategy",""],["bidding_strategy_simulation",""],["billing_setup",""],["campaign",""],["campaign_bid_modifier",""],["campaign_criterion",""],["campaign_criterion_simulation",""],["campaign_simulation",""],["change_event",""],["conversion_action",""],["custom_audience_member",""],["customer_negative_criterion",""],["extension_feed_item",""],["feed",""],["feed_attribute_operation",""],["feed_item_set",""],["feed_item_target",""],["feed_mapping",""],["invoice",""],["keyword_plan_forecast_period",""],["media_file",""],["offline_user_data_job",""],["recommendation",""],["shared_criterion",""],["user_list",""]],"struct":[["AccountBudget","An account-level budget. It contains information about the budget itself, as well as the most recently approved changes to the budget and proposed changes that are pending approval. The proposed changes that are pending approval, if any, are found in 'pending_proposal'.  Effective details about the budget are found in fields prefixed 'approved_', 'adjusted_' and those without a prefix.  Since some effective details may differ from what the user had originally requested (e.g. spending limit), these differences are juxtaposed via 'proposed_', 'approved_', and possibly 'adjusted_' fields."],["AccountBudgetProposal","An account-level budget proposal."],["AccountLink","Represents the data sharing connection between a Google Ads account and another account"],["Ad","An ad."],["AdGroup","An ad group."],["AdGroupAd","An ad group ad."],["AdGroupAdAssetPolicySummary","Contains policy information for an ad group ad asset."],["AdGroupAdAssetView","A link between an AdGroupAd and an Asset. Currently we only support AdGroupAdAssetView for AppAds."],["AdGroupAdLabel","A relationship between an ad group ad and a label."],["AdGroupAdPolicySummary","Contains policy information for an ad."],["AdGroupAsset","A link between an ad group and an asset."],["AdGroupAudienceView","An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level."],["AdGroupBidModifier","Represents an ad group bid modifier."],["AdGroupCriterion","An ad group criterion."],["AdGroupCriterionLabel","A relationship between an ad group criterion and a label."],["AdGroupCriterionSimulation","An ad group criterion simulation. Supported combinations of advertising channel type, criterion type, simulation type, and simulation modification method are detailed below respectively. Hotel AdGroupCriterion simulation operations starting in V5."],["AdGroupExtensionSetting","An ad group extension setting."],["AdGroupFeed","An ad group feed."],["AdGroupLabel","A relationship between an ad group and a label."],["AdGroupSimulation","An ad group simulation. Supported combinations of advertising channel type, simulation type and simulation modification method is detailed below respectively."],["AdParameter","An ad parameter that is used to update numeric values (such as prices or inventory levels) in any text line of an ad (including URLs). There can be a maximum of two AdParameters per ad group criterion. (One with parameter_index = 1 and one with parameter_index = 2.) In the ad the parameters are referenced by a placeholder of the form \"{param#:value}\". E.g. \"{param1:$17}\""],["AdScheduleView","An ad schedule view summarizes the performance of campaigns by AdSchedule criteria."],["AgeRangeView","An age range view."],["Asset","Asset is a part of an ad which can be shared across multiple ads. It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc. Assets are immutable and cannot be removed. To stop an asset from serving, remove the asset from the entity that is using it."],["AssetPolicySummary","Contains policy information for an asset."],["AttributeFieldMapping","Maps from feed attribute id to a placeholder or criterion field id."],["BatchJob","A list of mutates being processed asynchronously. The mutates are uploaded by the user. The mutates themselves aren't readable and the results of the job can only be read using BatchJobService.ListBatchJobResults."],["BiddingStrategy","A bidding strategy."],["BiddingStrategySimulation","A bidding strategy simulation. Supported combinations of simulation type and simulation modification method are detailed below respectively."],["BillingSetup","A billing setup, which associates a payments account and an advertiser. A billing setup is specific to one advertiser."],["CallReportingSetting","Call reporting setting for a customer."],["CallView","A call view that includes data for call tracking of call-only ads or call extensions."],["Campaign","A campaign."],["CampaignAsset","A link between a Campaign and an Asset."],["CampaignAudienceView","A campaign audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated by campaign and audience criterion. This view only includes audiences attached at the campaign level."],["CampaignBidModifier","Represents a bid-modifiable only criterion at the campaign level."],["CampaignBudget","A campaign budget."],["CampaignCriterion","A campaign criterion."],["CampaignCriterionSimulation","A campaign criterion simulation. Supported combinations of advertising channel type, criterion ids, simulation type and simulation modification method is detailed below respectively."],["CampaignDraft","A campaign draft."],["CampaignExperiment","An A/B experiment that compares the performance of the base campaign (the control) and a variation of that campaign (the experiment)."],["CampaignExtensionSetting","A campaign extension setting."],["CampaignFeed","A campaign feed."],["CampaignLabel","Represents a relationship between a campaign and a label."],["CampaignSharedSet","CampaignSharedSets are used for managing the shared sets associated with a campaign."],["CampaignSimulation","A campaign simulation. Supported combinations of advertising channel type, simulation type and simulation modification method is detailed below respectively."],["CarrierConstant","A carrier criterion that can be used in campaign targeting."],["ChangeEvent","Describes the granular change of returned resource of certain resource types. Changes made through UI, API and new versions of Editor by external users (including external users, and internal users that can be shown externally) in the past 30 days will be shown. The change shows the old values of the changed fields before the change and the new values right after the change. ChangeEvent could have up to 3 minutes delay to reflect a new change."],["ChangeStatus","Describes the status of returned resource. ChangeStatus could have up to 3 minutes delay to reflect a new change."],["ClickView","A click view with metrics aggregated at each click level, including both valid and invalid clicks. For non-Search campaigns, metrics.clicks represents the number of valid and invalid interactions. Queries including ClickView must have a filter limiting the results to one day and can be requested for dates back to 90 days before the time of the request."],["CombinedAudience","Describe a resource for combined audiences which includes different audiences."],["ConversionAction","A conversion action."],["ConversionCustomVariable","A conversion custom variable See \"About custom variables for conversions\" at https://support.google.com/google-ads/answer/9964350"],["ConversionTrackingSetting","A collection of customer-wide settings related to Google Ads Conversion Tracking."],["CurrencyConstant","A currency constant."],["CustomAudience","A custom audience. This is a list of users by interest."],["CustomAudienceMember","A member of custom audience. A member can be a KEYWORD, URL, PLACE_CATEGORY or APP. It can only be created or removed but not changed."],["CustomInterest","A custom interest. This is a list of users by interest."],["CustomInterestMember","A member of custom interest audience. A member can be a keyword or url. It is immutable, that is, it can only be created or removed but not changed."],["Customer","A customer."],["CustomerAsset","A link between a customer and an asset."],["CustomerClient","A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself."],["CustomerClientLink","Represents customer client link relationship."],["CustomerExtensionSetting","A customer extension setting."],["CustomerFeed","A customer feed."],["CustomerLabel","Represents a relationship between a customer and a label. This customer may not have access to all the labels attached to it. Additional CustomerLabels may be returned by increasing permissions with login-customer-id."],["CustomerManagerLink","Represents customer-manager link relationship."],["CustomerNegativeCriterion","A negative criterion for exclusions at the customer level."],["CustomerUserAccess","Represents the permission of a single user onto a single customer."],["CustomerUserAccessInvitation","Represent an invitation to a new user on this customer account."],["DataPartnerLinkIdentifier","The identifier for Data Partner account."],["DetailPlacementView","A view with metrics aggregated by ad group and URL or YouTube video."],["DisplayKeywordView","A display keyword view."],["DistanceView","A distance view with metrics aggregated by the user's distance from an advertiser's location extensions. Each DistanceBucket includes all impressions that fall within its distance and a single impression will contribute to the metrics for all DistanceBuckets that include the user's distance."],["DomainCategory","A category generated automatically by crawling a domain. If a campaign uses the DynamicSearchAdsSetting, then domain categories will be generated for the domain. The categories can be targeted using WebpageConditionInfo. See: https://support.google.com/google-ads/answer/2471185"],["DynamicSearchAdsSearchTermView","A dynamic search ads search term view."],["ExpandedLandingPageView","A landing page view with metrics aggregated at the expanded final URL level."],["ExtensionFeedItem","An extension feed item."],["Feed","A feed."],["FeedAttribute","FeedAttributes define the types of data expected to be present in a Feed. A single FeedAttribute specifies the expected type of the FeedItemAttributes with the same FeedAttributeId. Optionally, a FeedAttribute can be marked as being part of a FeedItem's unique key."],["FeedAttributeOperation","Operation to be performed on a feed attribute list in a mutate."],["FeedItem","A feed item."],["FeedItemAttributeValue","A feed item attribute value."],["FeedItemPlaceholderPolicyInfo","Policy, validation, and quality approval info for a feed item for the specified placeholder type."],["FeedItemSet","Represents a set of feed items. The set can be used and shared among certain feed item features. For instance, the set can be referenced within the matching functions of CustomerFeed, CampaignFeed, and AdGroupFeed."],["FeedItemSetLink","Represents a link between a FeedItem and a FeedItemSet."],["FeedItemTarget","A feed item target."],["FeedItemValidationError","Stores a validation error and the set of offending feed attributes which together are responsible for causing a feed item validation error."],["FeedMapping","A feed mapping."],["FeedPlaceholderView","A feed placeholder view."],["GenderView","A gender view."],["GeoTargetConstant","A geo target constant."],["GeographicView","A geographic view."],["GoogleAdsField","A field or resource (artifact) used by GoogleAdsService."],["GoogleAdsLinkIdentifier","The identifier for Google Ads account."],["GroupPlacementView","A group placement view."],["HotelGroupView","A hotel group view."],["HotelPerformanceView","A hotel performance view."],["IncomeRangeView","An income range view."],["Invoice","An invoice. All invoice information is snapshotted to match the PDF invoice. For invoices older than the launch of InvoiceService, the snapshotted information may not match the PDF invoice."],["KeywordPlan","A Keyword Planner plan. Max number of saved keyword plans: 10000. It's possible to remove plans if limit is reached."],["KeywordPlanAdGroup","A Keyword Planner ad group. Max number of keyword plan ad groups per plan: 200."],["KeywordPlanAdGroupKeyword","A Keyword Plan ad group keyword. Max number of keyword plan keywords per plan: 10000."],["KeywordPlanCampaign","A Keyword Plan campaign. Max number of keyword plan campaigns per plan allowed: 1."],["KeywordPlanCampaignKeyword","A Keyword Plan Campaign keyword. Only negative keywords are supported for Campaign Keyword."],["KeywordPlanForecastPeriod","The forecasting period associated with the keyword plan."],["KeywordPlanGeoTarget","A geo target."],["KeywordView","A keyword view."],["Label","A label."],["LandingPageView","A landing page view with metrics aggregated at the unexpanded final URL level."],["LanguageConstant","A language."],["LifeEvent","A life event: a particular interest-based vertical to be targeted to reach users when they are in the midst of important life milestones."],["LocationView","A location view summarizes the performance of campaigns by Location criteria."],["ManagedPlacementView","A managed placement view."],["MediaAudio","Encapsulates an Audio."],["MediaBundle","Represents a ZIP archive media the content of which contains HTML5 assets."],["MediaFile","A media file."],["MediaImage","Encapsulates an Image."],["MediaVideo","Encapsulates a Video."],["MerchantCenterLink","A data sharing connection, proposed or in use, between a Google Ads Customer and a Merchant Center account."],["MobileAppCategoryConstant","A mobile application category constant."],["MobileDeviceConstant","A mobile device constant."],["OfflineUserDataJob","A job containing offline user data of store visitors, or user list members that will be processed asynchronously. The uploaded data isn't readable and the processing results of the job can only be read using OfflineUserDataJobService.GetOfflineUserDataJob."],["OperatingSystemVersionConstant","A mobile operating system version or a range of versions, depending on `operator_type`. List of available mobile platforms at https://developers.google.com/adwords/api/docs/appendix/codes-formats#mobile-platforms"],["PaidOrganicSearchTermView","A paid organic search term view providing a view of search stats across ads and organic listings aggregated by search term at the ad group level."],["ParentalStatusView","A parental status view."],["PaymentsAccount","A payments account, which can be used to set up billing for an Ads customer."],["ProductBiddingCategoryConstant","A Product Bidding Category."],["ProductGroupView","A product group view."],["Recommendation","A recommendation."],["RemarketingAction","A remarketing action. A snippet of JavaScript code that will collect the product id and the type of page people visited (product page, shopping cart page, purchase page, general site visit) on an advertiser's website."],["RemarketingSetting","Remarketing setting for a customer."],["SearchTermView","A search term view with metrics aggregated by search term at the ad group level."],["SharedCriterion","A criterion belonging to a shared set."],["SharedSet","SharedSets are used for sharing criterion exclusions across multiple campaigns."],["ShoppingPerformanceView","Shopping performance view. Provides Shopping campaign statistics aggregated at several product dimension levels. Product dimension values from Merchant Center such as brand, category, custom attributes, product condition and product type will reflect the state of each dimension as of the date and time when the corresponding event was recorded."],["ThirdPartyAppAnalyticsLink","A data sharing connection, allowing the import of third party app analytics into a Google Ads Customer."],["ThirdPartyAppAnalyticsLinkIdentifier","The identifiers of a Third Party App Analytics Link."],["TopicConstant","Use topics to target or exclude placements in the Google Display Network based on the category into which the placement falls (for example, \"Pets & Animals/Pets/Dogs\")."],["TopicView","A topic view."],["UserInterest","A user interest: a particular interest-based vertical to be targeted."],["UserList","A user list. This is a list of users a customer may target."],["UserLocationView","A user location view."],["Video","A video."],["WebpageView","A webpage view."]]});