<div class="row items-center mt-20 lg:mt-5">
    <div class="mt-8 lg:mt-0 lg:col-6 lg:-mr-8">
        <div class="flex flex-col justify-center items-start text-gray-200 lg:px-16 max-w-2xl ml-auto">
            <h4 class="text-3xl font-bold text-gray-500">{{ $project->client }}</h4>
            <p class="font-medium mt-3">{{ $project->getShortDescription() }}</p>
            <ul class="flex flex-col w-full mt-8 mb-10">
                <li class="flex flex-row items-center py-4 px-1 lg:px-4 border-b border-gray-100">
                    @include('_components.icon', ['name' => 'window', 'class' => 'w-8 h-8 text-blue-500'])
                    <a href="{{ $project->link }}" class="text-sm hover:text-blue-500 ml-3">{{ $project->link }}</a>
                </li>
                <li class="flex flex-row items-center py-4 px-1 lg:px-4 border-b border-gray-100">
                    @include('_components.icon', ['name' => 'check', 'class' => 'w-8 h-8 text-blue-500'])
                    <p class="text-sm ml-3">{{ $project->services }}</p>
                </li>
                <li class="flex flex-row items-center py-4 px-1 lg:px-4 border-b border-gray-100">
                    @include('_components.icon', ['name' => 'check', 'class' => 'w-8 h-8 text-blue-500 mr-3'])
                    @foreach($project->technologies as $items)
                        <p class="text-sm mr-1">{{ $items }} {{ $loop->last ? ' ' : ',' }}</p>
                    @endforeach
                </li>
            </ul>
            <a href="{{ $project->getUrl() }}" class="bg-blue-500 text-white px-8 py-2 uppercase">Read More</a>
        </div>
    </div>
    <div class="order-first lg:order-none lg:col-6 bg-skew-180">
        <img class="w-full h-auto object-cover" srcset="{{ $project->cover_lg }}" src="{{ $project->cover }}" alt="">
    </div>
</div>