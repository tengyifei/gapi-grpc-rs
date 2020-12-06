initSidebarItems({"enum":[["Likelihood","A bucketized representation of likelihood, which is intended to give clients highly stable results across model upgrades."]],"mod":[["batch_operation_metadata",""],["block",""],["face_annotation",""],["feature",""],["image_annotator_client","Generated client implementations."],["import_product_sets_input_config",""],["operation_metadata",""],["product",""],["product_search_client","Generated client implementations."],["product_search_results",""],["purge_products_request",""],["text_annotation",""],["web_detection",""]],"struct":[["AddProductToProductSetRequest","Request message for the `AddProductToProductSet` method."],["AnnotateFileRequest","A request to annotate one single file, e.g. a PDF, TIFF or GIF file."],["AnnotateFileResponse","Response to a single file annotation request. A file may contain one or more images, which individually have their own responses."],["AnnotateImageRequest","Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information."],["AnnotateImageResponse","Response to an image annotation request."],["AsyncAnnotateFileRequest","An offline file annotation request."],["AsyncAnnotateFileResponse","The response for a single offline file annotation request."],["AsyncBatchAnnotateFilesRequest","Multiple async file annotation requests are batched into a single service call."],["AsyncBatchAnnotateFilesResponse","Response to an async batch file annotation request."],["AsyncBatchAnnotateImagesRequest","Request for async image annotation for a list of images."],["AsyncBatchAnnotateImagesResponse","Response to an async batch image annotation request."],["BatchAnnotateFilesRequest","A list of requests to annotate files using the BatchAnnotateFiles API."],["BatchAnnotateFilesResponse","A list of file annotation responses."],["BatchAnnotateImagesRequest","Multiple image annotation requests are batched into a single service call."],["BatchAnnotateImagesResponse","Response to a batch image annotation request."],["BatchOperationMetadata","Metadata for the batch operations such as the current state."],["Block","Logical element on the page."],["BoundingPoly","A bounding polygon for the detected image annotation."],["ColorInfo","Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image."],["CreateProductRequest","Request message for the `CreateProduct` method."],["CreateProductSetRequest","Request message for the `CreateProductSet` method."],["CreateReferenceImageRequest","Request message for the `CreateReferenceImage` method."],["CropHint","Single crop hint that is used to generate a new crop when serving an image."],["CropHintsAnnotation","Set of crop hints that are used to generate new crops when serving images."],["CropHintsParams","Parameters for crop hints annotation request."],["DeleteProductRequest","Request message for the `DeleteProduct` method."],["DeleteProductSetRequest","Request message for the `DeleteProductSet` method."],["DeleteReferenceImageRequest","Request message for the `DeleteReferenceImage` method."],["DominantColorsAnnotation","Set of dominant colors and their corresponding scores."],["EntityAnnotation","Set of detected entity features."],["FaceAnnotation","A face annotation object contains the results of face detection."],["Feature","The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list."],["GcsDestination","The Google Cloud Storage location where the output will be written to."],["GcsSource","The Google Cloud Storage location where the input will be read from."],["GetProductRequest","Request message for the `GetProduct` method."],["GetProductSetRequest","Request message for the `GetProductSet` method."],["GetReferenceImageRequest","Request message for the `GetReferenceImage` method."],["Image","Client image to perform Google Cloud Vision API tasks over."],["ImageAnnotationContext","If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image."],["ImageContext","Image context and/or feature-specific parameters."],["ImageProperties","Stores image properties, such as dominant colors."],["ImageSource","External image source (Google Cloud Storage or web URL image location)."],["ImportProductSetsGcsSource","The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line."],["ImportProductSetsInputConfig","The input content for the `ImportProductSets` method."],["ImportProductSetsRequest","Request message for the `ImportProductSets` method."],["ImportProductSetsResponse","Response message for the `ImportProductSets` method."],["InputConfig","The desired input location and metadata."],["LatLongRect","Rectangle determined by min and max `LatLng` pairs."],["ListProductSetsRequest","Request message for the `ListProductSets` method."],["ListProductSetsResponse","Response message for the `ListProductSets` method."],["ListProductsInProductSetRequest","Request message for the `ListProductsInProductSet` method."],["ListProductsInProductSetResponse","Response message for the `ListProductsInProductSet` method."],["ListProductsRequest","Request message for the `ListProducts` method."],["ListProductsResponse","Response message for the `ListProducts` method."],["ListReferenceImagesRequest","Request message for the `ListReferenceImages` method."],["ListReferenceImagesResponse","Response message for the `ListReferenceImages` method."],["LocalizedObjectAnnotation","Set of detected objects with bounding boxes."],["LocationInfo","Detected entity location information."],["NormalizedVertex","A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1."],["OperationMetadata","Contains metadata for the BatchAnnotateImages operation."],["OutputConfig","The desired output location and metadata."],["Page","Detected page from OCR."],["Paragraph","Structural unit of text representing a number of words in certain order."],["Position","A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image."],["Product","A Product contains ReferenceImages."],["ProductSearchParams","Parameters for a product search request."],["ProductSearchResults","Results for a product search request."],["ProductSet","A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail."],["ProductSetPurgeConfig","Config to control which ProductSet contains the Products to be deleted."],["Property","A `Property` consists of a user-supplied name/value pair."],["PurgeProductsRequest","Request message for the `PurgeProducts` method."],["ReferenceImage","A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes."],["RemoveProductFromProductSetRequest","Request message for the `RemoveProductFromProductSet` method."],["SafeSearchAnnotation","Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence)."],["Symbol","A single symbol representation."],["TextAnnotation","TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the [TextAnnotation.TextProperty][google.cloud.vision.v1.TextAnnotation.TextProperty] message definition below for more detail."],["TextDetectionParams","Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features."],["UpdateProductRequest","Request message for the `UpdateProduct` method."],["UpdateProductSetRequest","Request message for the `UpdateProductSet` method."],["Vertex","A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image."],["WebDetection","Relevant information for the image from the Internet."],["WebDetectionParams","Parameters for web detection request."],["Word","A word representation."]]});