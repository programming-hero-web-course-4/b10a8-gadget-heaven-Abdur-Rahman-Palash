

const Reviews = () => {
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-slate-200 mt-10 mb-5 ">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                <div>
                    <img src="../src/assets/woman.webp" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">Leroy Jenkins</h4>
                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-yellow-500">
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
            </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
I recently purchased the [Product Name] and have been very pleased with its performance. The [mention key features, e.g., design, durability, functionality] really stand out, making it easy to [describe what the product helps accomplish, like improving productivity, simplifying tasks, etc.]. One thing I particularly appreciate is the [mention specific feature, e.g., battery life, user interface, comfort], which has exceeded my expectations. While there may be a few minor downsides, like [mention any small issues, if any, e.g., price, minor feature limitations], overall, this product has been a great investment. I would highly recommend it to anyone looking for [mention target user or benefit, e.g., a reliable gadget, efficient tool, etc.]!</p>
          
        </div>
    </div>
    );
};

export default Reviews;