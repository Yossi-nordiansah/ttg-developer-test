import React from 'react'

const Skeleton = () => {
    return (
        <div className="w-64 shadow-2xl animate-pulse">
            {/* Gambar skeleton */}
            <div className="h-56 bg-gray-200 rounded-t-md"></div>

            <div className="px-2 mb-2 mt-2 space-y-3">
                {/* Judul / deskripsi */}
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                </div>

                {/* Kategori dan status */}
                <div className="flex justify-between items-center">
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                        <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Tombol */}
            <div className="bg-gray-300 h-8 rounded-b-md"></div>
        </div>
    )
}

export default Skeleton