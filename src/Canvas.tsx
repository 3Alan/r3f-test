import { Loader } from "@react-three/drei";
import type { CanvasProps } from "@react-three/fiber";
import { Canvas as BaseCanvas } from "@react-three/fiber";
import { memo, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

/**
 * 包含错误边界和基础灯光的Canvas组件
 */
const Canvas = (
  props: CanvasProps & {
    /**
     * 是否共用同一个canvas，在弹窗内使用时必须单独使用一个canvas
     */
    share?: boolean;
  }
) => {
  const { children, share = true, ...restProps } = props;

  // 为了在canvas层级使用useErrorBoundary
  const fallbackRender = ({ error }: { error: Error }) => {
    return <CanvasErrorFallback error={error} share={share} />;
  };

  const handleError = (error: Error) => {
    if (!share) {
      return;
    }

    const canvasViewWrapper = document.querySelector(".canvas-view-wrapper");

    /**
     * 如果共享canvas，当canvas出错时，通过dom操作在使用canvas的地方渲染错误信息
     */
    if (canvasViewWrapper) {
      canvasViewWrapper.innerHTML = `<div class="flex h-full w-full flex-col items-center justify-center gap-[4px]">
        <strong class="block">${error.message}</strong>
        <i class="block">
          error
        </i>
      </div>`;
    }
  };

  return (
    <ErrorBoundary fallbackRender={fallbackRender} onError={handleError}>
      <BaseCanvas
        shadows={false}
        eventSource={share ? document.getElementById("root")! : undefined}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        {...restProps}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </BaseCanvas>

      {!share && <Loader containerStyles={{ zIndex: 20 }} />}
    </ErrorBoundary>
  );
};

const CanvasErrorFallback = ({
  error,
  share = true,
}: {
  error: Error;
  share?: boolean;
}) => {
  if (share) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[4px]">
      <strong className="block">{error.message}</strong>
      <i className="block">error</i>
    </div>
  );
};

export default memo(Canvas);
