<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ListRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductController extends Controller
{
    public function store(StoreRequest $request, Product $product)
    {
        $product->create($request->all());

        $response = [
            'success' => true,
        ];

        return response()->json($response, 200);
    }

    public function record(Product $product)
    {
        $response = [
            'success' => true,
            'item' => $product,
        ];

        return response()->json($response, 200);
    }

    public function update(UpdateRequest $request, Product $product)
    {
        $product->update($request->all());

        $response = [
            'success' => true,
        ];

        return response()->json($response, 200);
    }

    public function delete(Product $product)
    {
        $product->delete();

        $response = [
            'success' => true,
        ];

        return response()->json($response, 200);
    }

    public function list(ListRequest $request)
    {
        $list = Product::query()
            ->when(
                $request->get('by'),
                function ($q, $sort) use ($request) {
                    $q->orderBy($sort, $request->get('dir', 'asc'));
                }
            )
            ->paginate($request->count);

        if ($request->page > $list->lastPage()) {
            throw new HttpResponseException(response()->json([
                'success' => false,
                'message' => 'Page not found',
            ], 404));
        }

        $custom = collect(['success' => true]);

        $response = $custom->merge($list);

        return response()->json($response, 200);
    }
}